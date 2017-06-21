import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.js';

describe('Form', () => {

  it('should have a form with a class of .beer-form', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.find('.beer-form').length).toBe(1);
  });

  it('should have a form with 3 inputs', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('#beer-name').length).toBe(1);
    expect(wrapper.find('#beer-likes-value').length).toBe(1);
  });
});
