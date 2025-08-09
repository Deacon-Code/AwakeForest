import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenericProjectsHeader from "../components/GenericProjectsHeader";
import useScrollToTop from "../hooks/useScrollToTop";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	useScrollToTop();
	return (
		<div>
			<Navbar />
			<GenericProjectsHeader
				heading="Contact"
				text=""
				backgroundImage="src/assets/Hero_Images_shared/Tohi_Garden_Pic.jpeg"
			/>
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Contact;
