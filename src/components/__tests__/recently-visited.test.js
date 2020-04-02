import React from 'react';
import {configure, shallow} from 'enzyme';
import {mockStore} from '../../__mocks__/store-mock';
import {RecentlyVisited} from '../recently-visited';
import Link from "@material-ui/core/Link";
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import * as ReactReduxHooks from "../../stores/react-redux-hooks";

configure({adapter: new Adapter()});
window.scrollTo = jest.fn();

describe('Hero Row', () => {
  let wrapper;
  let store;
  const classes = {recentlyVisited: 'recentlyVisited'};

  beforeEach(() => {
    store = configureStore([thunk])(mockStore);

    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(state => store.getState());

    wrapper = shallow(<RecentlyVisited store={store} classes={classes} />);
  });

  describe('on mount', () => {
    it('should render label', () => {
      expect(wrapper.find('h2').text()).toContain('Recently Visited: ');
    });

    it('should render links', () => {
      expect(wrapper.find(Link).text()).toBe('3-D Man');
    });
  });
});


