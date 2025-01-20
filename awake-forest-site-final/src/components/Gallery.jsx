import React from 'react'
import './GalleryStyles.css'
import Steve from '../assets/MYBOYSTEVE.jpg'
import IsaacNewton from '../assets/IsaacNewton.jpg'
import ReynoldaTrail from '../assets/ReynoldaTrail.jpg'

const Gallery = () => {
  return (
    <div className="gallery">
    <div className="gallery-item">
      <img src={ReynoldaTrail}  alt="Image 1"></img>
      <div className="overlay">
        <span className="image-name">Image 1</span>
      </div>
    </div>
    <div className="gallery-item">
      <img src={ReynoldaTrail}  alt="Image 2"></img>
      <div className="overlay">
        <span className="image-name">Image 2</span>
      </div>
    </div>
    <div className="gallery-item">
      <img src={ReynoldaTrail} alt="Image 3"></img>
      <div className="overlay">
        <span className="image-name">Image 3</span>
      </div>
    </div>
  </div>
  )
}

export default Gallery
