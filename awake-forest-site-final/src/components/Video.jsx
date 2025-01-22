import React from 'react'
import vidForAwake from '../assets/Meadow.mp4'
import './VideoStyles.css'

const Video = () => 
    {
  return (
    <div className="video-container">
        <h1> Welcome to Awake Forest! </h1>
        <video autoPlay loop muted id="video">
          <source src={vidForAwake} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
