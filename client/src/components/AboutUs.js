import React from 'react'
import Stack from 'react-bootstrap/Stack'
import './Component.css'

const AboutUs = () => {
    return (
        <Stack gap={8} >
            <h1 className='title'> About Us</h1>
            <div className='about'> 
                <title > About Us</title>
                
                <p> The purpose of this web app is to enable individuals to meet with random individuals in a randomized groupchat consisting of 4 individuals, where they will be able to play multiplayer
                    games together, or watch randomized videos on various topics. The objective of this webapp is to allow individuals from any types of backgrounds to meet like-minded individuals, and congregate
                    in order to form possible new connections.     
            
                </p>
            </div>
        </Stack>
    )
}

export default AboutUs
