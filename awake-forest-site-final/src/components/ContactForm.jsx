import React from "react";
import "./ContactFormStyles.css";
import { SiGroupme } from "react-icons/si";

export default function ContactForm() {
	return (
		<div className="contact-container">
			<div className="contact-content">
				<h2 className="contact-heading">Get In Touch</h2>
				<p className="contact-email">
					Have questions? Email our President at:{" "}
					<a href="mailto:roseed22@wfu.edu">roseed22@wfu.edu</a>
				</p>
				<a
					href="https://google.com/url?q=https://groupme.com/join_group/102963733/sxTT6DeP&sa=D&source=docs&ust=1754696441191839&usg=AOvVaw0ASJNpKM-oOZb-aey9qmKg"
					className="groupme-button"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Join our GroupMe">
					<SiGroupme />
				</a>
			</div>
		</div>
	);
}
