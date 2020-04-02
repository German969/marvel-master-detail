import React from 'react';
import {configure, mount} from 'enzyme';
import Footer from "../footer";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe('Footer', () => {
  const wrapper = mount(<Footer />);

  it('should render attribution text', () => {
    expect(wrapper.text()).toBe('Data provided by Marvel. © 2014 Marvel');
  });
});