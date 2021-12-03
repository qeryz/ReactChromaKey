import React from 'react';
import '../App.js';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <video id='hero-vid' src={process.env.PUBLIC_URL + "/assets/videos/video-1.mp4"} autoPlay loop muted playsInline/>
            <h1>CHROMA KEY</h1>
            <p className='desc'>Real time green screen processor</p>
            <p className='call'>Try it now for free.</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--editor' buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--tut'
                buttonSize='btn--large'>
                    WATCH TUTORIAL <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    );
}

export default Hero
