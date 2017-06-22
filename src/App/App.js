import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import BeerCards from '../BeerCards/BeerCards.js';
import Form from '../Form/Form.js';

const proxyURL = 'https://cors-anywhere.herokuapp.com/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beer: [],
      isActive: false
    }
  }

  componentDidMount() {
    this.fetchBeers()
  }

  fetchBeers() {
    fetch(proxyURL + 'http://beer.fluentcloud.com/v1/beer')
    .then(response => response.json())
    .then(data => this.setState({ beer: data }))
    .catch(error => console.error(error))
  }

  updateBeerLikes(id, likes) {
    fetch(proxyURL + `http://beer.fluentcloud.com/v1/beer/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({ likes })
    })
    .then(response => this.fetchBeers())
    .catch(error => console.error(error))
  }

  postNewBeer(name, likes) {
    fetch(proxyURL + 'http://beer.fluentcloud.com/v1/beer', {
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

  beerFormActive() {
    this.setState({ isActive: !this.state.isActive })
  }

  beerFormSave(e) {
    e.preventDefault();
    let name = $('#beer-name').val();
    let likes = $('#beer-likes-value').val();

    if (name.length <= 0 || likes.length <= 0) {
      $('.error-msg').text('Error: Please Enter a Name & Amount of Likes')
    } else {
      this.postNewBeer(name, likes)
      $('.error-msg').empty()
    }
    this.clearFields();
  }

  clearFields() {
    $('#beer-name').val('');
    $('#beer-likes-value').val('');
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>The Best Beer Cooler</h2>
        </div>

        <button className='add-beer-button' onClick={ () => { this.beerFormActive() } }>{ this.state.isActive === false? 'Add New Beer': 'Hide' }</button>

        { this.state.isActive === true ? <Form onClick={ (e) => this.beerFormSave(e) }/> : null }

        <BeerCards data={ this.state.beer } onClick={ (e, likes, id) => this.updateLikes(e, likes, id) }/>
      </div>
    );
  }
};

export default App;
