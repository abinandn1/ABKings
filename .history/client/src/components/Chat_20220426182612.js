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
    let messageCount = 0;
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
        'https://www.youtube.com/playlist?list=PLFsQleAWXsj_4yDeebiIADdH5FMayBiJo'
    ];

    const sendNotification = () => {
        if (messageCount === 0 || messageCount % 20 === 0) {
            notification.success({message:'Lets have fun! Try doing the following: ' + getRandomGame(), duration:5, placement:'bottomRight'});
        }
        messageCount++;
    }

    const getRandomGame = () => {
        return games[Math.floor(Math.random() * games.length)];
    }
 
    return (
        <div>
        
        </div>
    )
}

export default Chat
