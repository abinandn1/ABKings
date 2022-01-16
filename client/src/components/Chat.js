import { useState, useEffect, React } from 'react';
import { ChatEngine } from 'react-chat-engine';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import './Chat.css';
import { notification } from 'antd';
import { RadiusUpleftOutlined,
         RadiusUprightOutlined,
         RadiusBottomleftOutlined,
         RadiusBottomrightOutlined} from '@ant-design/icons';


const Chat = (props) => {
    const games = [
        '21 Questions', 
        'Would You Rather?',
        'Slither.io (http://slither.io/)',
        'Scribbl.io (https://skribbl.io/)',
        'Name Game',
        'One Word Stories',
        'Spyfall (https://www.spyfall.app/)',
        'Diep.io (http://diep.io/)',
        'Agar.io (https://agar.io/#ffa)',
    ];

    const getRandomGame = () => {
        return games[Math.floor(Math.random() * games.length)];
    }
 
    return (
        <ChatEngine
        projectID='7b72783c-f016-4ad3-bfe3-611fc7b0a8e1'
        userName = {props.prop.Name}
        userSecret = {props.prop.Password}        
        onNewMessage = {(chatId, message) => {notification.success({message:'Lets have fun! Try playing: ' + getRandomGame(), duration:5, placement:'bottomRight'});}}
        > <RadiusUprightOutlined/> 
        </ChatEngine>
    )
}

export default Chat
