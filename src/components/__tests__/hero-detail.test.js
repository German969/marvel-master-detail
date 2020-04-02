import React from 'react';
import {configure, shallow} from 'enzyme';
import {mockStore} from '../../__mocks__/store-mock';
import {mockRecentStore} from '../../__mocks__/store-recent-mock';
import HeroLinks from "../hero-links";
import {HeroDetail} from "../heroe-detail";
import Avatar from '@material-ui/core/Avatar';
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as ReactReduxHooks from "../../stores/react-redux-hooks";

configure({adapter: new Adapter()});

describe('Hero Detail', () => {
  let wrapper;
  let store;
  let useEffect;
  const classes = {
    heroDetail: 'heroDetail',
    heroAvatar: 'heroAvatar',
    heroName: 'heroName',
    heroDescription: 'heroDescription'
  };

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    store = configureStore([thunk])(mockStore);

    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();

    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(state => store.getState());

    wrapper = shallow(<HeroDetail store={store} classes={classes} />);
  });

  describe('on mount', () => {
    const hero = mockStore.characters[0];

    it('should set hero from recent if not in characters list', () => {
      store = configureStore([thunk])(mockRecentStore);

      useEffect = jest.spyOn(React, 'useEffect');
      mockUseEffect();
      mockUseEffect();

      jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
      jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(state => store.getState());

      wrapper = shallow(<HeroDetail store={store} classes={classes} />);

      expect(wrapper.find('h2').text()).toBe(mockRecentStore.recentSearch[0].name);
    });

    it('should render avatar', () => {
      const avatarURL = hero ? hero.thumbnail.path + '.' + hero.thumbnail.extension : '';

      expect(wrapper.find(Avatar).props()).toMatchObject({
        alt: hero.name,
        src: avatarURL,
        variant: 'rounded',
        className: classes.heroAvatar
      });
    });

    it('should render hero name', () => {
      expect(wrapper.find('h2').props()).toMatchObject({className: classes.heroName});
      expect(wrapper.find('h2').text()).toBe(hero.name);
    });

    it('should render hero links', () => {
      expect(wrapper.find(HeroLinks).props()).toMatchObject({hero: hero});
    });
  });
});


