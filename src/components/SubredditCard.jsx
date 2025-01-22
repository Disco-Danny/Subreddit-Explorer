import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favouriteSlice';

function SubredditCard({ subreddit }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const isFavorite = favorites.find(fav => fav.id === subreddit.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(subreddit));
    } else {
      dispatch(addFavorite(subreddit));
    }
  };

  return (
    <div className="subreddit-card">
      <h3>{subreddit.display_name}</h3>
      <p>{subreddit.title}</p>
      <button onClick={handleFavoriteToggle}>
        {isFavorite ? 'Unstar' : 'Star'}
      </button>
    </div>
  );
}

export default SubredditCard;
