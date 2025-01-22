import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Subreddit from './pages/SubredditPage';
import './App.css'

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/subreddit/:subredditId" element={<Subreddit />} />
    </Routes>
  );
}

export default App;
