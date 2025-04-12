// /api/instagram.jsx

const fetch = require("node-fetch"); // Import node-fetch to make HTTP requests

// Instagram Graph API endpoint
const INSTAGRAM_API_URL = "https://graph.instagram.com/me/media";

// Replace with your actual access token
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

module.exports = async (req, res) => {
	try {
		// Fetch data from Instagram API
		const response = await fetch(
			`${INSTAGRAM_API_URL}?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${ACCESS_TOKEN}`
		);
		const data = await response.json();

		// Check if the response contains media data
		if (data.data) {
			res.status(200).json(data.data); // Send the media data as JSON
		} else {
			res.status(500).json({ error: "Failed to fetch Instagram data" }); // Handle API failure
		}
	} catch (error) {
		res.status(500).json({ error: "Server Error: " + error.message });
	}
};
