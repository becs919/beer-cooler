import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import BeerCards from './BeerCards.js';

describe('BeerCards', () => {
  const mockData = [
    {
    id: 67,
    name: "Yeti",
    likes: 17
    },
    {
    id: 65,
    name: "Dan's Wicked Dry Humor Ale",
    likes: 5
    },
    {
    id: 64,
    name: "Jimmy John",
    likes: 1
    },
    {
    id: 63,
    name: "Dry Dock - All",
    likes: 5
    },
    {
    id: 62,
    name: "Rumpkin",
    likes: 20
    }
  ];

  it('should have a div with a class of .beer-card', () => {
    const wrapper = mount(<BeerCards data={ mockData }/>);

    expect(wrapper.find('.beer-card').length).toBe(1);
  });

});
