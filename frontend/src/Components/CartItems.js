import React, { useContext } from 'react';
import { ProdContext } from '../Context';
import { Row, Col, Button, Image, Container } from 'react-bootstrap';

const CartItems = props => {

    let item = props.value;
    const { increament, decreament, removeItem } = useContext(ProdContext);


    return (
        <Row md="d-flex align-items-center flex-row"
            style={{ gap: ".5rem" }}>
            <Col md={3} xs={4}>
                <Image className="cart_image" src={item.img} alt="/" fluid />
                <div className="d-flex justify-content-between">{item.title} <span></span> ${item.price}</div>
                
            </Col>



            <Col md={4} xs={4}>
                <div
                    className="d-flex align-items-center flex-column"
                    style={{ gap: ".3rem" }}
                >
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{ gap: ".1rem" }}
                         >
                        <Button onClick={() => decreament(item.id)}>-</Button>
                        <div style={{ gap: ".7rem" }}>
                            <span className="fs-3">{item.count}</span> in cart
                        </div>
                        <Button onClick={() => increament(item.id)}>+</Button>
                    </Container>
                </div>

            </Col>


            <Col md={3} xs={2} style={{ gap: ".5rem" }}>
                <span className="fs-3">${item.total}</span> in total
            </Col>

            <Col md={1} xs={1} style={{ gap: ".5rem" }}>
                <Button onClick={() => removeItem(item.id)}>x</Button>
            </Col>
        </Row>
    );
};

export default CartItems;