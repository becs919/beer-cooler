import React from 'react';
import { mount } from 'enzyme';
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

  it('each BeerCard should have 2 buttons, a p and an h3', () => {
    const wrapper = mount(<BeerCards data={ mockData }/>);

    expect(wrapper.find('button').length).toBe(10);
    expect(wrapper.find('p').length).toBe(5);
    expect(wrapper.find('h3').length).toBe(5);
  });

  it('should increase likes', () => {
    const wrapper = mount(<BeerCards data={ mockData } onClick={ jest.fn() }/>);

    wrapper.find('.like-button').first().simulate('click');

    expect(wrapper.find('.beer-likes').first().props().children).toBe(18)
  });

  it('should decrease likes', () => {
    const wrapper = mount(<BeerCards data={ mockData } onClick={ jest.fn() }/>);

    wrapper.find('.dislike-button').first().simulate('click');

    expect(wrapper.find('.beer-likes').first().props().children).toBe(16)
  });
});
