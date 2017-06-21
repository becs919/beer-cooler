import React from 'react';
import './BeerCards.css';

const BeerCards = ({ data, onClick }) => {
  return (
    <div className='beer-card'>
    {
      data.map(beer => {
        return (
          <div key={ beer.id } data-id={ beer.id }>
            <h3>{ beer.name }</h3>
            <p>likes: <span className='beer-likes'>{ beer.likes }</span></p>
            <button className='like-button' onClick={ (e, likes, id) => onClick(e, beer.likes, beer.id) }>Like</button>
            <button className='dislike-button' onClick={ (e, likes, id) => onClick(e, beer.likes, beer.id) }>Dislike</button>
          </div>
        )
      })
    }
    </div>
  )
};

export default BeerCards;
