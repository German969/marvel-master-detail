import React from 'react';
import {configure, shallow} from 'enzyme';
import { HeroLinks } from "../hero-links";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import SvgIcon from "@material-ui/core/SvgIcon";
import Link from '@material-ui/core/Link';
import { ReactComponent as ExitIcon } from '../assets/exit.svg';
import { mockStore } from "../../__mocks__/store-mock";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

const classesMock = {
  heroLinks: 'heroLinks'
};

describe('Hero Links', () => {
  const wrapper = shallow(<HeroLinks hero={mockStore.characters[0]} classes={classesMock} />);

  it('should render card title and items', () => {
    expect(wrapper.find(Typography).text()).toBe('Resource Links');
    expect(wrapper.find(ListItem)).toHaveLength(3);
  });

  it('should render exit icons', () => {
    wrapper.find(Link).forEach((link, index) => {
      expect(link.props()).toMatchObject({
        href: mockStore.characters[0].urls[index].url
      })
    });
  });

  it('should render links', () => {
    wrapper.find(SvgIcon).forEach((icon) => {
      expect(icon.props()).toMatchObject({
        component: ExitIcon,
        viewBox: '0 0 600 600'
      })
    });
  })
});