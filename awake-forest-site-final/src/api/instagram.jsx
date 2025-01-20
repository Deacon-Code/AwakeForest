export default async function handler(req, res) {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN; // Set this in Vercel's environment variables
    const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,timestamp&access_token=${accessToken}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json({ error: data.error.message });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch Instagram posts." });
    }
  }