import React, { useState, useEffect } from 'react';
import './MostRecentPostStyles.css';

const MostRecentPost = () => {
  const [post, setPost] = useState(null); // Store the post data

  useEffect(() => {
    // Fetch Instagram posts when the component mounts
    async function fetchInstagramPost() {
      try {
        const response = await fetch('/api/instagram'); // Call your backend function
        const data = await response.json();
        
        if (data && data.length > 0) {
          setPost(data[0]); // Assume the first post is the most recent one
        }
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    }

    fetchInstagramPost(); // Call the function when the component mounts
  }, []); // Empty dependency array, so it runs only once on mount

  if (!post) {
    return <div>Loading...</div>; // Show loading state until the data is fetched
  }

  return (
    <div className="most-recent-post">
      <h2>Most Recent Post</h2>
      <div className="post">
        <img src={post.media_url} alt="Instagram post" />
        <p className="caption">{post.caption}</p>
        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
          View on Instagram
        </a>
      </div>
    </div>
  );
};

export default MostRecentPost;