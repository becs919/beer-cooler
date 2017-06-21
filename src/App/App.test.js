import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import App from './App';

describe('App', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders one BeerCards component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('BeerCards').length).toBe(1);
  });

  it('renders App div and one App-header', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.App').length).toBe(1);
    expect(wrapper.find('.App-header').length).toBe(1);
  });

  it('should store beers', () => {
    const wrapper = shallow(<App />);
    let mockState = {
      beer: []
    };

    expect(wrapper.state()).toMatchObject(mockState);
  });

  it('calls componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);

    expect(App.prototype.componentDidMount).toHaveProperty('callCount', 1);
    App.prototype.componentDidMount.restore();
  });
});
