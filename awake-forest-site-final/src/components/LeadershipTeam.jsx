import React from "react";
import "./LeadershipTeamStyles.css";
import leaves_background from "../assets/llleaves.svg";
import Francisco_Gallegos from "../assets/leaders/Francisco_Gallegos.jpg";
import President from "../assets/leaders/President.png";
import Michelle_Martinkov from "../assets/leaders/Michelle_Martinkov.jpg";

const LeadershipTeam = () => {
	const teamMembers = [
		{
			name: "Francisco Gallegos",
			position: "Faculty Advisor",
			image: Francisco_Gallegos,
			bio: "Francisco Gallegos has taught philosophy at WFU since 2018. His work focuses on the politics of emotion, and he has been learning about and practicing mindfulness for about 10 years. He loves conversing with students, and he is especially curious about how mindfulness can serve as a refuge of peace and facilitate positive change at the individual and collective levels.",
			email: "gallegft@wfu.edu",
		},
		{
			name: "Ethan Rosenberg",
			position: "President",
			image: President,
			bio: "I would be grateful and excited to speak with whomever is reading this right now. Please do not hesitate to reach out for anything at all. With love and care always, EDR",
			email: "roseed22@wfu.edu",
		},
		{
			name: "Michelle Martinkov",
			position: "Treasurer/Vice President",
			image: Michelle_Martinkov,
			bio: "Michelle loves seeking new experiences and ideas that challenge her perspective and deepen her understanding of herself and the world. Her meditation practice is a form of discipline that calms her mind and keeps her fully present, allowing her to engage in each moment with awareness and intention. Awake Forest is a welcoming community where meditation and open discussions spark new ideas and create lasting connections. The club has shown her the importance of balance and meeting life’s depth with a spirit that’s light, joyful, and a little silly.",
			email: "martm222@wfu.edu",
		},
	];
	return (
		<div className="leadership-team-container">
			<h1>Leadership Team</h1>
			<div className="leadership-team-grid">
				{teamMembers.map((member, index) => (
					<div key={index} className="team-member-card">
						<img
							src={member.image}
							alt={member.name}
							className="team-member-image"
						/>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
						<p>{member.bio}</p>
						<p>{member.email}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default LeadershipTeam;
