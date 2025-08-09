import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import simpleTree from "../assets/SharedImages/temp_logo.png";

const Navbar = () => {
	const isSmallScreen = window.innerWidth <= 700;
	const [isScrolled, setIsScrolled] = useState(isSmallScreen);
	const [isHovered, setIsHovered] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	const handleScroll = () => {
		if (isSmallScreen) {
			setIsScrolled(true);
		} else if (window.scrollY >= 100) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const handleResize = () => {
		if (window.innerWidth <= 700) {
			setIsScrolled(true);
		} else if (window.scrollY < 100) {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const toggleNavbar = () => {
		setIsExpanded(!isExpanded);
		setIsHovered(false);
	};

	let className = "nav-header";
	if (isHovered) {
		className += " expanded";
		className += " hovered";
	} else {
		if (isScrolled || isSmallScreen) {
			className += " scrolled";
		}
		if (isHovered) {
			className += " hovered";
		}
	}

	return (
		<div
			className={className}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<div className="logo" onClick={toggleNavbar}>
				<img src={simpleTree} alt="logo" />
				<h1>Awake Forest</h1>
			</div>
			<ul className="nav-links" onClick={toggleNavbar}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/schedule">Schedule</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
				<li>
					<Link to="/Resources">Resources</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
