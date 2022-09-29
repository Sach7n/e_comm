import React, { useState, useEffect } from 'react';
import { storeProducts } from "./data"

export const ProdContext = React.createContext();
export const { Consumer } = ProdContext;

const Context = props => {


    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const [items, setIteams] = useState([]);


    useEffect(() => {
        const fetchItems = () => {
            setProducts(storeProducts)
            setLoading(false)
        }
        fetchItems();
    }, [])

    const handleCart = id => {
        let tempCart = [...products]
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        setIteams(items => [...items, product]);
      }

    const removeItem = id => {
        let tempCart = [...products]
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.inCart = false;
        product.count = 0;
        const removedItems = items.filter(item => item.id !== id)
        setIteams(removedItems);
    }
    const increament = id => {
        let tempCart = [...items]
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        setIteams(tempCart);
    }

    const decreament = id => {
        let tempCart = [...items]
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            removeItem(id);
        }
        else {
            product.total = product.count * product.price;
            setIteams(tempCart);
        }

    }
    const providerValues = {
        products,
        setProducts,
        loading,
        handleCart,
        removeItem,
        items,
        increament,
        decreament
    };


    return (
        <div>
            <ProdContext.Provider value={providerValues} >
                {props.children}
            </ProdContext.Provider>
        </div>
    );
};

export default Context;