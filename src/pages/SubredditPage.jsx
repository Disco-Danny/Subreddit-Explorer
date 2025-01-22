import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function SubredditPage() {
  const { subredditId } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/r/${subredditId}/hot.json`)
      .then(response => {
        const postData = response.data.data.children.map(item => item.data);
        setPosts(postData);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, [subredditId]);

  return (
    <div>
      <h1>Posts from {subredditId}</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
          <p>Upvotes: {post.ups}</p>
        </div>
      ))}
    </div>
  );
}


export default SubredditPage;
