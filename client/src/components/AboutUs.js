import React from 'react'
import Stack from 'react-bootstrap/Stack'

const AboutUs = () => {
    console.log('woo!')
    return (
        <Stack gap={8} className='HomePage'>
            <h1 className='title'> About Us</h1>
            <div className='aboutUs'> 
                <title> About Us</title>
                <p> The purpose of this web app is to enable individuals to meet with random individuals in a randomized groupchat consisting of 4 individuals, where they will be able to play multiplayer
                    games together, or watch randomized videos on various topics. The objective of this webapp is to allow individuals from any types of backgrounds to meet like-minded individuals, and congregate    
            
                </p>
            </div>
        </Stack>
    )
}

export default AboutUs
