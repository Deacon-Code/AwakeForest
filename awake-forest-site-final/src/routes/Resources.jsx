import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenericProjectsHeader from "../components/GenericProjectsHeader";
import useScrollToTop from "../hooks/useScrollToTop";
import ResourcesList from "../components/ResourcesList";

const Resources = () => {
	useScrollToTop();
	return (
		<div>
			<Navbar />
			<GenericProjectsHeader
				heading="Resources"
				text=""
				backgroundImage="src/assets/book_nature_2.jpg"
			/>
			<ResourcesList />
			<Footer />
		</div>
	);
};

export default Resources;
