import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchSubreddits() {
  const [subreddits, setSubreddits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubreddits = async () => {
      try {
        const response = await axios.get('https://www.reddit.com/subreddits/popular.json');
        const data = response.data.data.children.map(child => child.data);
        setSubreddits(data);
      } catch (err) {
        setError('Failed to load subreddits.');
      }
    };

    fetchSubreddits();
  }, []);

  return { subreddits, error };
}
