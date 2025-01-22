import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://www.reddit.com/subreddits/popular.json')
      .then((response) => {
        const subredditData = response.data.data.children.map((item) => item.data);
        setSubreddits(subredditData);
      })
      .catch((error) => console.error('Error fetching subreddits:', error));
  }, []);

  const handleSubredditClick = (subreddit) => {
    setSelectedSubreddit(subreddit);
    axios
      .get(`https://www.reddit.com/r/${subreddit}/hot.json`)
      .then((response) => {
        const postData = response.data.data.children.map((item) => item.data);
        setPosts(postData);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredSubreddits = subreddits.filter((subreddit) =>
    subreddit.display_name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="home-container">
      <aside className="sidebar">
        <h2>Subreddits</h2>
        <input
          type="text"
          placeholder="Search subreddits..."
          className="search-bar"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <ul>
          {filteredSubreddits.map((subreddit) => (
            <li
              key={subreddit.id}
              onClick={() => handleSubredditClick(subreddit.display_name)}
            >
              {subreddit.display_name_prefixed}
            </li>
          ))}
        </ul>
      </aside>
      <main className="content">
        <div className="top-bar">
          <input
            type="text"
            placeholder="Search posts..."
            className="search-bar-pill"
          />
        </div>
        {selectedSubreddit ? (
          <>
            <h2>Posts from {selectedSubreddit}</h2>
            <div className="posts">
              {posts.map((post) => (
                <div key={post.id} className="post">
                  <div className="post-details">
                    <h3>{post.title}</h3>
                  </div>
                  {post.thumbnail && post.thumbnail !== 'self' ? (
                    <img
                      src={post.url}
                      alt="Post Thumbnail"
                      className="post-thumbnail"
                    />
                  ) : (
                    <img
                      src="https://via.placeholder.com/1920x1080"
                      alt="Placeholder"
                      className="post-thumbnail"
                    />
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <h2>Select a subreddit to view posts</h2>
        )}
      </main>
    </div>
  );
}

export default Home;
