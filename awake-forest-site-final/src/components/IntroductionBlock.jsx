import React from "react";
import "./IntroductionBlockStyles.css";
import Meditation from "../assets/meditation-relaxation-calm-meditating-spirituality-tranquility-concentration-svgrepo-com.svg";
import { Link } from "react-router-dom";

const IntroductionBlock = () => {
	return (
		<div className="intro-container">
			<div className="mid-block">
				<img src={Meditation} alt="Meditation"></img>
				<h1> Find your peace with Awake Forest</h1>
				<p>
					{" "}
					Awake Forest is a meditation and wellness club at Wake Forest
					University dedicated to promoting mindfulness and holistic well-being
					among students. Through regular meditation sessions, wellness
					workshops, and community-building activities, the club provides a
					supportive environment for individuals to cultivate inner peace,
					reduce stress, and enhance their overall mental and physical health.
					Whether you're new to meditation or have an established practice,
					Awake Forest welcomes all students interested in exploring and
					nurturing their well-being.{" "}
				</p>
				<Link to="/about">
					<button className="learn-more-btn">Learn More</button>
				</Link>
			</div>
		</div>
	);
};

export default IntroductionBlock;
