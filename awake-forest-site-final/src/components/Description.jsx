import React from 'react'
import './DescriptionStyles.css'
import Meditating_man from '../assets/young-man-relaxing-and-meditating-in-the-field-free-video.jpg'

const Description = () => {
  return (
    <div className = "Description-container">
        <div className = "Description-image">
            <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Blumenwiese_bei_Obermaiselstein05.jpg/1200px-Blumenwiese_bei_Obermaiselstein05.jpg'/>
        </div>
        <div className = "Description-text">
            <h1> About Awake Forest </h1>
            <p>  
              If you’ve ever wondered why your heart drops when you forget to bring your phone to the bathroom, why your mind starts racing as soon as you lay down for bed, or why “Who Am I?” can be such a difficult yet beautiful question to explore, swing by for a sit, a yoga sesh, a guest speaker, or anything at all, we’d love to meet you. Welcome to Awake Forest - We’re an ever-evolving community of students impassioned by this life, with the intention to live it joyfully, peacefully, and authentically, together. Whether meditating, playing hacky sack, getting Pit, or running through the rain, Awake Forest is a group of students exploring what it means to be our true selves and live life to the fullest. 
          </p>
        </div>
    </div>
  )
}

export default Description
