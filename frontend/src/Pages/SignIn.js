import React, { useRef, useCallback, useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import Progress from "../Components/Progress"


const SignIn = props => {
  const [file, setFile] = useState(null)
  const fullNameInputElement = useRef();
  const passwordInputElement = useRef();
  const formRef = useRef();
  const Navigate = useNavigate()


  const formHandler = useCallback(

    () => (event) => {
      event.preventDefault();
      const data = {
        name: fullNameInputElement.current.value,
        password: passwordInputElement.current.value,
      };
      console.log(data)

      if ( !(!data.name || /^\s*$/.test(data.name)) && data != null){
        setFile(data)
       }
      else {
        alert("please fill form")
      }
      formRef.current.reset();
    },[]

  );

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          <Form className='form_div' ref={formRef} onSubmit={formHandler()}>


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
      {file && <Progress file={file} />}

    </Container>
  )
}


export default SignIn