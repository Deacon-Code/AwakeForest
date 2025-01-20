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

import wave from '../assets/wave-svg.svg';

const Footer = () => {
  const handleGroupmeClick = useRedirectOnClick(
    "https://example.com"
  );
  const handleGitHubClick = useRedirectOnClick(
    "https://example.com"
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
              presidentEmail@gmail.com
            </h4>
          </div>
          <div className="calendar">
            <h4>
              <FaCalendarAlt
                size={20}
                style={{ color: "#FFFFFF", marginRight: "2rem" }}
              />{" "}
              Random Day from Time - Time
            </h4>
            <div className="disclaimer">
              <h4>
                <IoIosWarning
                  size={30}
                  style={{ color: "#FFFFFF", marginRight: "2rem" }}
                />
                Potential Disclaimer.
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h4>About us</h4>
          <p>
          I. Quo usque tandem abutere, Catilina, patientia nostra? quam diu etiam furor iste tuus nos eludet? 
          quem ad finem sese effrenata iactabit audacia? Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae, nihil timor populi, nihil concursus bonorum omnium, nihil hic munitissimus habendi senatus locus, nihil horum ora voltusque moverunt? 
          Patere tua consilia non sentis, constrictam iam horum omnium scientia teneri coniurationem tuam non vides? 
          </p>
          <div className="socials">
          {<FaInstagram
              onClick={handleGroupmeClick}
              size={30}
              style={{ color: "#FFFFFF", marginRight: "1rem", cursor: "pointer" }}
            />}
            {<SiGroupme
              onClick={handleGroupmeClick}
              size={30}
              style={{ color: "#FFFFFF", marginRight: "1rem", cursor: "pointer" }}
            />}
            {<FaLinkedin
              size={30}
              style={{ color: "#FFFFFF", marginRight: "1rem" }}
            />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
