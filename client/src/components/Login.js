import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import './Component.css';
import Chat from './Chat'
import { useNavigate } from 'react-router';



//   //joinRoom = () => {
//     //if (this.state.Name!=="") {
//       //this.socket.emit("JoinRoom");
//    // }
//  // }

//   // processUser = () => {
//     // this.socket.emit('send', 'Rahul');
//   // }
  
//   // ChatPage = (name) => {
//     // return null;
//   // }

class Login extends Component{

  state = {
    showChat: false
  }
   navToChat = () => {
     this.setState({
        showChat: !this.state.showChat
    })
  }

  ChatPage = () => {
    return null;
  }


  NicknameComponent = () => {
    return (
      <Container className="Login">
        <Stack gap={10}>
        <Form id="name_container">
          <h3> Enter a nickname </h3>
          <Form.Group className="mb-3" controlId="formBasicInput">
            <Form.Control
              id="name_input"
              className="form"
              type="input"
              placeholder="Enter a nickname"
              onChange = {(e)=>{this.setState({Name: e.target.value})}} 
            />
          </Form.Group>
          <h3> Enter a password </h3>
          <Form.Group className='mb-3' controlId='formBasicInput'>
              <Form.Control
                id='password_input'
                className='form'
                type='input'
                placeholder='Enter a password'
                onChange={(e)=>{this.setState({Password: e.target.value})}}/>
          </Form.Group>
          </Form>
            <h3> 
                The purpose of this web app is to enable individuals to meet with random individuals in a randomized groupchat consisting of 4 individuals, where they will be able to play multiplayer
                games together, or watch randomized videos on various topics. The objective of this webapp is to allow individuals from any types of backgrounds to meet like-minded individuals, and congregate
                in order to form possible new connections 
            </h3>
          </Stack>
          <Button type="LoginButton" className='button-73' onClick={(e) => { this.navToChat(e.target.value) }}>Let's Go!</Button>
        </Container>
    )
  }

  render() {
    if (this.state.showChat) {
      this.ChatPage = Chat;
      this.NicknameComponent = () => {
        return null;
      };
    }
    return (
      <div className="loginPage">
        <this.ChatPage prop={{ Name: this.state.Name, Password: this.state.Password}}/>
        <this.NicknameComponent/>

          {/* <Chat socket={socket} Name={Name} /> */}
      </div>
    );
  };

}

export default Login;
