import React from "react";
import "./ResourcesListStyles.css";

const ResourcesList = () => {
	return (
		<div className="resources-container">
			<div className="resources-content">
				<h2 className="resources-heading">Explore Our Resources</h2>
				<p className="resources-subheading">
					Discover our curated collection of wellness and meditation materials.
				</p>
				<a
					href="https://docs.google.com/spreadsheets/d/1K40KXufhioXjHF2bbl7qi_5ekJOGfooNqHO6wHgT0SI/edit?gid=0#gid=0"
					className="resources-button"
					target="_blank"
					rel="noopener noreferrer">
					View Resources
				</a>
			</div>
		</div>
	);
};

export default ResourcesList;
