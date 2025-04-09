import React from 'react'



const LeadershipTeam = () => {
    const teamMembers = [
        {
            name: "John Doe",
            position: "President",
            image: "https://example.com/john.jpg",
            bio: "John is the president of the organization and has been a leader in the community for over 10 years."
        },
        {
            name: "Jane Smith",
            position: "Vice President",
            image: "https://example.com/jane.jpg",
            bio: "Jane is the vice president and has a background in environmental science."
        },
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
            </div>
            ))}
        </div>

      
    </div>
  )
}

export default LeadershipTeam
