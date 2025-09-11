import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GenericProjectsHeader from "../components/GenericProjectsHeader";
import useScrollToTop from "../hooks/useScrollToTop";
import ContactForm from "../components/ContactForm";
import Tohi_Garden_Pic from "../assets/Hero_Images_shared/Tohi_Garden_Pic.jpeg";
const Contact = () => {
	useScrollToTop();
	return (
		<div>
			<Navbar />
			<GenericProjectsHeader
				heading="Contact"
				text=""
				backgroundImage={Tohi_Garden_Pic}
			/>
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Contact;
