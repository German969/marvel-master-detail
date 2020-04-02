import React from 'react';
import {configure, mount} from 'enzyme';
import Header from "../header";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe('Header', () => {
  const wrapper = mount(<Header />);

  it('should render Page Title', () => {
    expect(wrapper.text()).toBe('Marvel Super Heroes');
  });
});