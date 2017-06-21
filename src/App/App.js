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
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let targetUrl = 'http://beer.fluentcloud.com/v1/beer';
    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then(data => this.setState({ beer: data }))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Your Beer Cooler</h2>
        </div>
        <BeerCards data={ this.state.beer }/>
      </div>
    );
  }
}

export default App;
