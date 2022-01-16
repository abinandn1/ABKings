import { useState, React } from 'react';
import io from 'socket.io-client';
import { InputGroup, FormControl, Button } from 'react-bootstrap';



const Chat = (socket, Name) => {
   
    
    return (
        <div>
            <InputGroup>
                <FormControl placeholder="Say something!" as="textarea" aria-label="With textarea" />
                <Button variant="outline-secondary">Enter</Button>
            </InputGroup>
        </div>
    )
}

export default Chat
