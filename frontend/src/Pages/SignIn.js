import React, { useRef, useCallback, useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';

const SignIn = props => {

  const fullNameInputElement = useRef();
  const passwordInputElement = useRef();
  const [res,setRes] = useState(null)
  const Navigate = useNavigate()
  function formHandler() {
    return (e) => {
      e.preventDefault();
      const data = {
        name: fullNameInputElement.current?.value,
        password: passwordInputElement.current?.value,
      };
  
        fetch("http://localhost:5000/admin/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify(data)

            }).then((data) => {
              if(data.status == 200){
                console.log("success",data)
                Navigate("/admin/addProduct")

              }
              else{
                console.log("wrong credentials",data )
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
      
    };
  };

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          <Form className='form_div' onSubmit={formHandler()}>


            <Form.Group htmlFor="full_name">
              <Form.Label>Name</Form.Label>

              <Form.Control
                ref={fullNameInputElement}
                id="full_name"
                placeholder=""
                type="text"
              />
            </Form.Group>

            <Form.Group htmlFor="full_name">
              <Form.Label>Password</Form.Label>

              <Form.Control
                ref={passwordInputElement}
                id="password"
                placeholder=""
                type="password"
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


export default SignIn