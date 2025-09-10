import React from "react";
import "./FootStyles.css";
import {
	FaFacebook,
	FaLinkedin,
	FaMailBulk,
	FaSlack,
	FaSearchLocation,
	FaTwitter,
	FaInstagram,
	FaCalendar,
	FaCalendarAlt,
	FaGithub,
} from "react-icons/fa";

import { IoIosWarning } from "react-icons/io";

import useRedirectOnClick from "../hooks/useRedirectOnClick";

import { SiGroupme } from "react-icons/si";

import wave from "../assets/wave-svg.svg";

const Footer = () => {
	const handleGroupmeClick = useRedirectOnClick(
		"https://google.com/url?q=https://groupme.com/join_group/102963733/sxTT6DeP&sa=D&source=docs&ust=1754696441191839&usg=AOvVaw0ASJNpKM-oOZb-aey9qmKg"
	);

	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaSearchLocation
							size={20}
							style={{ color: "#FFFFFF", marginRight: "2rem" }}
						/>
						<div>
							<p>Hall Room #RoomNum</p>
							<h4>Wake Forest University</h4>
						</div>
					</div>
					<div className="email">
						<h4>
							<FaMailBulk
								size={20}
								style={{ color: "#FFFFFF", marginRight: "2rem" }}
							/>{" "}
							awake@wfu.edu
						</h4>
					</div>
					<div className="calendar">
						<h4>
							<FaCalendarAlt
								size={20}
								style={{ color: "#FFFFFF", marginRight: "2rem" }}
							/>{" "}
						</h4>
					</div>
				</div>
				<div className="right">
					<h4>About us</h4>
					<p>
						Awake Forest is a group of students on campus. We come together with
						a shared goal of enjoying life and rediscovering the most authentic
						versions of ourselves that we often lose touch with. To do so, it is
						crucial to learn to be fully present for each moment life has to
						offer, and this is why the practice of meditation lies at the center
						of our club. Through group meditations, deep and open discussions
						about life, real friendship, and tons of play, being a part of this
						community has added fresh color and a felt-sense of depth to my
						experience at Wake.
					</p>
					<div className="socials">
						{
							<SiGroupme
								onClick={handleGroupmeClick}
								size={30}
								style={{
									color: "#FFFFFF",
									marginRight: "1rem",
									cursor: "pointer",
								}}
							/>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
