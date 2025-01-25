async function fetchInstagramFeed() {
    try {
      const response = await fetch('/api/instagram'); // Call the backend API
      const data = await response.json();
  
      const feedContainer = document.getElementById('instagram-feed');
  
      data.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
  
        let mediaElement;
        if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') {
          mediaElement = document.createElement('img');
          mediaElement.src = post.media_url;
          mediaElement.alt = post.caption || 'Instagram post';
        } else if (post.media_type === 'VIDEO') {
          mediaElement = document.createElement('video');
          mediaElement.src = post.media_url;
          mediaElement.controls = true;
        }
  
        postElement.appendChild(mediaElement);
  
        if (post.caption) {
          const captionElement = document.createElement('p');
          captionElement.classList.add('caption');
          captionElement.innerText = post.caption;
          postElement.appendChild(captionElement);
        }
  
        const linkElement = document.createElement('a');
        linkElement.href = post.permalink;
        linkElement.target = '_blank';
        linkElement.innerText = 'View on Instagram';
        postElement.appendChild(linkElement);
  
        feedContainer.appendChild(postElement);
      });
    } catch (error) {
      console.error('Error fetching Instagram feed:', error);
    }
  }
  
  fetchInstagramFeed(); // Fetch and display feed when the page loads
  