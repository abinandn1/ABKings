import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { Button } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack'

const SignUp = () => {

    const getSignUpData = () => {
        
    }

    return (
      <div className="signupPage">
      <Container className="Signup">
        <h1>Login Page</h1>
        <Stack gap={3}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="form"
                type="email"
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Text className="mute">Your Email is confidential</Form.Text>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="form"
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Button>Submit</Button>
          </Form>
        </Stack>
      </Container>
    </div>
   );
  };
  
  export default SignUp;
