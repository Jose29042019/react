import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain the navigation links', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('nav ul li')).toHaveLength(4);
  });

  it('should have a link to the Tienda section', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('a[href="#tienda"]')).toHaveLength(1);
  });

  it('should have a link to the Sobre nosotros section', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('a[href="#post"]')).toHaveLength(1);
  });
});
