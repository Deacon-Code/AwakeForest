import React from "react";
import "./GalleryStyles.css";
import MeditationRoom1 from "../assets/SharedImages/Meditation_Room_1.JPG";
import MeditationRoom2 from "../assets/SharedImages/Meditation_Room_2.JPG";
import MeditationRoom3 from "../assets/SharedImages/Meditation_Room_3.JPG";

const Gallery = () => {
	return (
		<div className="gallery">
			<div className="gallery-item">
				<img src={MeditationRoom1} alt="Image 1"></img>
				<div className="overlay">
					<span className="image-name"></span>
				</div>
			</div>
			<div className="gallery-item">
				<img src={MeditationRoom2} alt="Image 2"></img>
				<div className="overlay">
					<span className="image-name"></span>
				</div>
			</div>
			<div className="gallery-item">
				<img src={MeditationRoom3} alt="Image 3"></img>
				<div className="overlay">
					<span className="image-name"></span>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
