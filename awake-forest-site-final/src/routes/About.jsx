import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenericProjectsHeader from "../components/GenericProjectsHeader";
import useScrollToTop from "../hooks/useScrollToTop";
import Description from "../components/Description";
import LeadershipTeam from "../components/LeadershipTeam";
import Accordian from "../components/Accordian";
function About() {
	useScrollToTop();
	return (
		<div>
			<GenericProjectsHeader
				heading="About Awake Forest"
				text=""
				backgroundImage="src/assets/Hero_Images_shared/Amin_and_Friends_On_Grass.jpeg"
			/>
			<Description />
			<Accordian />
			<LeadershipTeam />
			<Navbar />
			<Footer />
		</div>
	);
}

export default About;
