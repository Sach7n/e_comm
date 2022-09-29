import React, { useCallback, useRef, useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

const AddProductScreen = props => {

    const [success,setSuccess] = useState(null)

    const productNameInputElement = useRef();
    const companyInputElement = useRef();
    const descInputElement = useRef();
    const countInputElement = useRef();
    const priceInputElement = useRef();
    const totalInputElement = useRef();

    const formHandler1 = useCallback(
         () => (event) => {
            event.preventDefault();

            const data = {
                name: productNameInputElement.current?.value,
                company: companyInputElement.current?.value,
                information: descInputElement.current?.value,
                count: countInputElement.current?.value,
                price: priceInputElement.current?.value,
                total: totalInputElement.current?.value
            };
            console.log(data)
            console.log(JSON.stringify(data))
            
            fetch("http://localhost:5000/products/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify(data)
            }).then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
              setSuccess(data)
            })
            .catch((error) => {
              console.error('Error:', error);
            });            
         
        },
        []
    );
        if(success){window.alert("data added")}
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <h1>Add new Products</h1>
                    <Form className='form_div' onSubmit={formHandler1()} >


                        <Form.Group htmlFor="name">
                            <Form.Label>Name</Form.Label>

                            <Form.Control
                                ref={productNameInputElement}
                                id="name"
                                placeholder=""
                                type="text"
                            />
                        </Form.Group>

                        <Form.Group htmlFor="company">
                            <Form.Label>Company</Form.Label>

                            <Form.Control
                                ref={companyInputElement}
                                id="company"
                                placeholder=""
                                type="text"
                            />
                        </Form.Group>          <Form.Group htmlFor="description">
                            <Form.Label>Description</Form.Label>

                            <Form.Control
                                ref={descInputElement}
                                id="description"
                                placeholder=""
                                type="text"
                            />
                        </Form.Group>          <Form.Group htmlFor="count">
                            <Form.Label>Count</Form.Label>

                            <Form.Control
                                ref={countInputElement}
                                id="count_confirmation"
                                placeholder=""
                                type="text"
                            />
                        </Form.Group>

                        <Form.Group htmlFor="price">
                            <Form.Label>Price</Form.Label>

                            <Form.Control
                                ref={priceInputElement}
                                id="price"
                                placeholder=""
                                type="text"
                            />
                        </Form.Group>

                        <Form.Group htmlFor="total">
                            <Form.Label>Total</Form.Label>

                            <Form.Control
                                ref={totalInputElement}
                                id="total"
                                placeholder=""
                                type="text"
                            />
                        </Form.Group>

                        <Button type='submit' className='mt-3' variant='primary'>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProductScreen