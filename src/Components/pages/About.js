import React from 'react';
import './About.css';

export default function About() {
  return (
    <>
      <div className='container'>
      <video id='vid' src={process.env.PUBLIC_URL + "/assets/videos/video-3.mp4"} autoPlay loop muted playsInline/>
        <h1 className='titleh1'>ABOUT CHROMA KEY</h1>
        <p className='info'>Chroma Key is a simple, powerful editor designed to replace a green screen video with a desired background. By combining the capabilities 
        of the video element with a canvas, it allows us to manipulate video data in real time.</p>
        <p className='end'>TRY IT NOW FOR FREE.</p>
      </div>
    </>
  )
}