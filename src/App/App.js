import React, { Component } from 'react';
import './App.css';
import BeerCards from '../BeerCards/BeerCards.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beer: []
    }
  }

  componentDidMount() {
    this.fetchBeers()
  }

  fetchBeers() {
    fetch('http://beer.fluentcloud.com/v1/beer')
    .then(response => response.json())
    .then(data => this.setState({ beer: data }))
    .catch(error => console.error(error))
  }

  updateBeerLikes(id, likes) {
    fetch(`http://beer.fluentcloud.com/v1/beer/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({ likes })
    })
    .then(response => this.fetchBeers())
    .catch(error => console.error(error))
  }

  postNewBeer(name, likes) {
    fetch('http://beer.fluentcloud.com/v1/beer', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({ name, likes })
    })
    .then(response => this.fetchBeers())
    .catch(error => console.error(error))
  }

  updateLikes(e, likes, id) {
    if (e.target.innerHTML === 'Like') {
      likes = likes+=1;
      this.updateBeerLikes(id, likes);
    } else {
      likes = likes-=1;
      this.updateBeerLikes(id, likes);
    }
  }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>The Best Beer Cooler</h2>
        </div>
        <BeerCards data={ this.state.beer } onClick={ (e, likes, id) => this.updateLikes(e, likes, id) }/>
      </div>
    );
  }
};

export default App;
