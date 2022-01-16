import {React, useState} from "react";
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import io from 'socket.io-client';
import './Component.css';
const Login = () => {

  const socket = io.connect("http://localhost:3001");
  const [Name, setName] = useState('');
  const [Lobby, setLobby] = useState(1);
  
  console.log(Name);
  const joinRoom = () => {
      if(Name!==""){
        socket.emit("JoinRoom");
      }
  }
  


  return (
    <div className="loginPage">
      <Container className="Login">
        <Stack gap={8}>
          <Form>
            <h3> Enter a nickname </h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                className="form"
                type="email"
                placeholder="Enter a nickname"
                />
              
            </Form.Group>
            
            <Button className='button-73' onClick = {(e)=>{setName(e.target.value); setLobby()}}>Let's Go!</Button>
            
          </Form>
        </Stack>
      </Container>
    </div>
  );
};

export default Login;
