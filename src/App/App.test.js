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

  it('renders form button', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.add-beer-button').length).toBe(1);
  });

  it('renders form button and displays Add New Beer when state is not active', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('.add-beer-button').text()).toBe('Add New Beer');
  });

  it('Changes isActive state and button text when clicked', () => {
    const wrapper = mount(<App />);
    let mockState = {
      beer: [],
      isActive: true
    };

    wrapper.find('.add-beer-button').simulate('click');

    expect(wrapper.state()).toMatchObject(mockState);
    expect(wrapper.find('.add-beer-button').text()).toBe('Hide');
    expect(wrapper.find('.error-msg').text()).toBe('')
  });

  it('should show error msg when input are fields blank', () => {
    const wrapper = mount(<App />);
    let mockState = {
      beer: [],
      isActive: true
    };

    wrapper.find('.add-beer-button').simulate('click');

    expect(wrapper.state()).toMatchObject(mockState);

    wrapper.find('#beer-name').simulate('change', {
      target: {
        name: ''
      }
    });

    wrapper.find('#beer-likes-value').simulate('change', {
      target: {
        likes: ''
      }
    });

    wrapper.find('.submit-button').simulate('click');

    expect(wrapper.find('.error-msg').text()).toBe('Error: Please Enter a Name & Amount of Likes')
  });

  it('should store beers', () => {
    const wrapper = shallow(<App />);
    let mockState = {
      beer: [],
      isActive: false
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
