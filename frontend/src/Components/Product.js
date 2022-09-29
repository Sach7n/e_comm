import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ProdContext } from '../Context';
import { Button, Card } from 'react-bootstrap'

const Product = props => {

    let item = props.value;
    const { handleCart } = useContext(ProdContext);

    const styles = {
        card: {
            backgroundColor: '#B7E0F2',
            padding: '1%',
            height: '80%'
        },
        cardImage: {
            objectFit: 'cover',
            height: '200px',
        }
    }

    return (
        <Card className="my-3 rounded h-60">

            
                <Card.Img 
                    style={styles.cardImage} src={item.img} alt="failed to load" variant='top' />
            
            <Card.Body className="d-flex flex-fill">
                <Card.Title className="flex-fill">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                </Card.Title>
                <Card.Text className="button-class">
                    {item.count === 0 ?
                        (<Button className="button" onClick={() => handleCart(item.id)}>+</Button>) : (
                            <Link to="/Cart" >  <Button >in cart</Button></Link>
                        )}
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default Product;