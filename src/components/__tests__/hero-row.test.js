import React from 'react';
import {configure, shallow} from 'enzyme';
import {mockStore} from '../../__mocks__/store-mock';
import {HeroRow} from '../hero-row';
import Avatar from '@material-ui/core/Avatar';
import Adapter from 'enzyme-adapter-react-16';
import Tooltip from '@material-ui/core/Tooltip';
import SvgIcon from '@material-ui/core/SvgIcon';
import TableRow from '@material-ui/core/TableRow';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import * as ReactReduxHooks from "../../stores/react-redux-hooks";

configure({adapter: new Adapter()});
window.scrollTo = jest.fn();

describe('Hero Row', () => {
  let wrapper;
  let store;
  const classes = {
    heroRowAvatar: 'heroRowAvatar',
    heroName: 'heroName',
    heroInfoCell: 'heroInfoCell',
    flagCell: 'flagCell',
    seriesIcon: 'seriesIcon',
    seriesIconDisabled: 'seriesIconDisabled',
    heroRow: 'heroRow'
  };
  const hero = mockStore.characters[0];

  beforeEach(() => {
    store = configureStore([thunk])(mockStore);

    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(state => store.getState());

    wrapper = shallow(<HeroRow hero={hero} store={store} classes={classes} />);
  });

  describe('on click', () => {
    it('should set selected', () => {
      let actions;

      wrapper.find(TableRow).simulate('click');

      actions = store.getActions();

      expect(actions).toEqual([ { type: 'SET_SELECTED', characterId: 1011334 } ]);
    });
  });

  describe('on mount', () => {
    it('should render avatar and name', () => {
      const avatarURL = hero.thumbnail.path + '.' + hero.thumbnail.extension;

      expect(wrapper.find(Avatar).props()).toMatchObject({
        alt: hero.name,
        src: avatarURL,
        className: classes.heroRowAvatar
      });
      expect(wrapper.find('h3').props()).toMatchObject({className: classes.heroName});
      expect(wrapper.find('h3').text()).toBe(hero.name);
    });

    it('should render comic icons', () => {
      expect(wrapper.find(Tooltip).at(0).props()).toMatchObject({
        title: 'This superhero appears in 2 comics.',
        placement: 'top',
        'aria-label': 'This superhero appears in 2 comics.'
      });
      expect(wrapper.find(SvgIcon).at(0).props()).toMatchObject({viewBox: '0 0 480 480'});
    });

    it('should render series icons', () => {
      expect(wrapper.find(Tooltip).at(1).props()).toMatchObject({
        title: 'This superhero appears in 3 series.',
        placement: 'top',
        'aria-label': 'This superhero appears in 3 series.'
      });
      expect(wrapper.find(SvgIcon).at(1).props()).toMatchObject({viewBox: '0 0 480 480'});
    });

    it('should render events icons', () => {
      expect(wrapper.find(Tooltip).at(2).props()).toMatchObject({
        title: 'This superhero appears in 1 events.',
        placement: 'top',
        'aria-label': 'This superhero appears in 1 events.'
      });
      expect(wrapper.find(SvgIcon).at(2).props()).toMatchObject({viewBox: '0 0 480 480'});
    });

    it('should render stories icons', () => {
      expect(wrapper.find(Tooltip).at(3).props()).toMatchObject({
        title: 'This superhero appears in 1 stories.',
        placement: 'top',
        'aria-label': 'This superhero appears in 1 stories.'
      });
      expect(wrapper.find(SvgIcon).at(3).props()).toMatchObject({viewBox: '0 0 480 480'});
    });
  });
});


