import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchPosts(subreddit) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://www.reddit.com/r/${subreddit}/hot.json`);
        const data = response.data.data.children.map(child => child.data);
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts.');
      }
    };

    fetchPosts();
  }, [subreddit]);

  return { posts, error };
}
