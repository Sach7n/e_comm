import React, { useRef, useCallback } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

const SignUp = props => {

  const fullNameInputElement = useRef();
  const emailInputElement = useRef();
  const passwordInputElement = useRef();
  const passwordConfirmationInputElement = useRef();

  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        fullName: fullNameInputElement.current?.value,
        email: emailInputElement.current?.value,
        password: passwordInputElement.current?.value,
        passwordConfirmation: passwordConfirmationInputElement.current?.value
      };

      console.log(data);
    },
    []
  );

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          <h1>Sign Up</h1>
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
              <Form.Label>Email</Form.Label>

              <Form.Control
                ref={emailInputElement}
                id="email"
                placeholder=""
                type="email"
              />
            </Form.Group>          <Form.Group htmlFor="full_name">
              <Form.Label>Password</Form.Label>

              <Form.Control
                ref={passwordInputElement}
                id="password"
                placeholder=""
                type="password"
              />
            </Form.Group>          <Form.Group htmlFor="full_name">
              <Form.Label>Confirm Password</Form.Label>

              <Form.Control
                ref={passwordConfirmationInputElement}
                id="password_confirmation"
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

SignUp.propTypes = {}

export default SignUp