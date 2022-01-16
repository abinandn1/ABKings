import './App.css';

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

// import 'bootstrap/dist/css/bootstrap.min.css';
// woo! 
let variableToShow = 'Not okay';

// https://stackoverflow.com/questions/43493373/react-component-not-updating-after-changing-a-value
// to fix the variableToShow


/*async function getExample() {
  try {
    const response = await axios(
      {
        url: 'http://localhost:5012/info',
        method: 'get',
        headers: { 'Content-Type': 'application-json' },
      }
    );
    variableToShow = 'Okay!';
    return response;
  } catch {
    console.log('Something went wrong')
  }
} */

function App() {
  // getExample().then(() => {
  //  console.log('getExample ran!')
  // }); 
  return (
    <div>
      
        <BrowserRouter>
          <Navbar fixed='top' bg='light' variant='light'  >
            <Navbar.Brand className='Nav'> OuiChat </Navbar.Brand>
              <Nav >
                    <Nav.Link className='Nav' href='/'>Home</Nav.Link>
                    <Nav.Link className='Nav'  href='/AboutUs'>About Us</Nav.Link>
                    {/* <Nav.Link href='#SignUp'>Sign Up</Nav.Link> */}
              </Nav>
          </Navbar>
          <Routes>
                    <Route path={'/AboutUs'} element={ <AboutUs/> }></Route>
                    <Route path={'/' || '/HomePage'} element={ <HomePage/> }></Route>
                    <Route path={'/Login'} element={ <Login/> }></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App