import React from 'react'
import "./LeadershipTeamStyles.css"; 
import leaves_background from "../assets/llleaves.svg";


const LeadershipTeam = () => {
    const teamMembers = [
        {
            name: "John Doe",
            position: "President",
            image: "https://media.npr.org/assets/img/2012/07/10/walterwhite_wide-24664a3dc903dff3bf3fe17a27996d6a174ee50b.jpg",
            bio: "John is the president of the organization and has been a leader in the community for over 10 years.",
            email: "example@hotmail.com"
        },
        {
            name: "Jane Smith",
            position: "Vice President",
            image: "https://ew.com/thmb/ShQnSzfrYy-kQVIT7QF3WtZzIA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/screen-shot-2017-01-11-at-12-24-27-pm-2000-d4c7b26e80d14a49a1a850d0d1fb08e9.jpg",
            bio: "Jane is the vice president and has a background in environmental science.",
            email: "example@hotmail.com"
            
        },
        {
            name: "Alice Johnson",
            position: "Treasurer",
            image: "https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png",
            bio: "Alice is the treasurer and has a degree in finance.",
            email: "example@hotmail.com"
        },
        {
            name: "Bob Brown",
            position: "Secretary",
            image: "https://upload.wikimedia.org/wikipedia/en/3/34/Jimmy_McGill_BCS_S3.png",
            bio: "Bob is the secretary and has experience in nonprofit management.",
            email: "example@hotmail.com"
        }

        // Add more team members as needed
    ];
  return (
    <div className="leadership-team-container">
        <h1>Leadership Team</h1>
        <div className="leadership-team-grid">
            {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
                <img src={member.image} alt={member.name} className="team-member-image" />
                <h2>{member.name}</h2>
                <p>{member.position}</p>
                <p>{member.bio}</p>
                <p>{member.email}</p>
            </div>
            ))}
        </div>

      
    </div>
  )
}

export default LeadershipTeam
