import React from 'react'
import { Button, Container } from "react-bootstrap";
import { useState } from 'react';
import Stack from "react-bootstrap/Stack";
import './Component.css';
import Login from './Login';
import App from '../App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import useHistory from 'react';
import { useNavigate } from 'react-router-dom';


class HomePage extends React.Component {
    LoginPage = () => {
        return null;
    }
    state = {
        showLogin: false
    }
    // showLogin = useState('');
    // path = '';
    // // // const nav = useNavigate();

    navToLogin = () => { 
        this.setState({
            showLogin: !this.state.showLogin
        })
    }

    StartChattingButton = () => {
        return (
            <div className='about'>
                
                <h3> Click Go! Make Some New Friends!
                </h3>
                <br/>
                <Button className='button-73' onClick={this.navToLogin}>Go!</Button>
            </div>  
        );
    }
    render() {
        if (this.state.showLogin) {
            this.LoginPage = Login;
            this.StartChattingButton = () => {
                return null;
            }
        }
        return (
            <div>
                
                    <this.LoginPage/>
                    <br/>
                    <this.StartChattingButton />
            </div>
        );
    }
};

export default HomePage;
