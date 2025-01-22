import React from 'react';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>By {post.author}</p>
      <p>Upvotes: {post.ups}</p>
    </div>
  );
}

export default PostCard;
