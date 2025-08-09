import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenericProjectsHeader from "../components/GenericProjectsHeader";
import Calendar from "../components/Calendar";
import useScrollToTop from "../hooks/useScrollToTop";
const Schedule = () => {
	useScrollToTop();
	return (
		<div>
			<Navbar />
			<GenericProjectsHeader
				heading="Schedule"
				text=""
				backgroundImage="src/assets/Hero_Images_shared/Main_Chapel.JPG"
			/>
			<Calendar />
			<Footer />
		</div>
	);
};

export default Schedule;
