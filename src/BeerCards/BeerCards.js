import React from 'react';
import './BeerCards.css';

const BeerCards = ({ data }) => {
  return (
    <div className="beer-card">
    {
      data.map(beer => {
        return (
          <div key={ beer.id }>
            <p>{ beer.name } likes: { beer.likes }</p>
            <button>Like</button>
            <button>Dislike</button>
          </div>
        )
      })
    }
    </div>
  )
};

export default BeerCards;
