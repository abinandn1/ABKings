import './App.css';
import Chat from './components/Chat';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Switch } from 'react-router';
import axios from 'axios';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Nav from 'react-bootstrap/Nav';
import './components/Component.css';


function App() {
  return (
    <div className='HomePage'>
      <BrowserRouter>
        <Navbar fixed='top' bg='light'  variant='light' >
        <img className='image'
          alt=''
          src={require('./arrow7.png')}
          width='150'
          height='150'
          />
          
          <Navbar.Brand className='Nav'> LinkUp </Navbar.Brand>
            <Nav >
                  <Nav.Link className='Nav' href='/'>Home</Nav.Link>
                  <Nav.Link className='Nav'  href='/AboutUs'>About Us</Nav.Link>
                  
            </Nav>
        </Navbar>
        <Routes>
          <Route path={'/AboutUs'} element={ <AboutUs/> }></Route>
          <Route path={'/HomePage'} element={<HomePage/>} exact></Route>
          <Route path={'/'} element={<HomePage/>} exact></Route>
          <Route path='/Login' element={ <Login/> } exact></Route>
          <Route path='/Chat' element={ <Chat/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App