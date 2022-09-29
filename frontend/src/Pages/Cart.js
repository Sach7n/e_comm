import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import CartItems from '../Components/CartItems';
import { ProdContext } from '../Context';
import { Row, Col, ListGroup} from 'react-bootstrap';


const Cart = props => {

    const { items } = useContext(ProdContext);
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {items.length === 0 ? (
                    <h1>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </h1>
                ) : (
                    <ListGroup variant='flush'>
                        {items.map(value =><ListGroup.Item key={value.id}> <CartItems value={value} />
                        </ListGroup.Item>
                        )}
                        </ListGroup>

                )
                }
            </Col>    
        </Row>
    );
};

export default Cart;