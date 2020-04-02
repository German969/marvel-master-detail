import React from 'react';
import {configure, shallow} from 'enzyme';
import axios from 'axios';
import {mockStore} from '../__mocks__/store-mock';
import {responseMock} from "../__mocks__/response-mock";
import App from '../App';
import Header from "../components/header";
import HeroesList from "../components/heroes-list";
import HeroDetail from "../components/heroe-detail";
import RecentlyVisited from "../components/recently-visited";
import Footer from "../components/footer";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as ReactReduxHooks from "../stores/react-redux-hooks";

jest.mock('axios');
configure({adapter: new Adapter()});
window.scrollTo = jest.fn();

describe('App', () => {
  let wrapper;
  let store;
  let useEffect;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    axios.get.mockClear();

    store = configureStore([thunk])(mockStore);

    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();

    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(state => store.getState());

    wrapper = shallow(<App store={store}/>);
  });

  describe('on mount', () => {
    axios.get.mockResolvedValue(responseMock);

    it('should dispatch fetch action to store', () => {
      let actions = store.getActions();
      const characters = mockStore.characters;

      expect(actions).toEqual([
        {type: 'ADD_CHARACTERS', characters},
        {type: 'SET_SELECTED', characterId: 1011334},
        {type: 'SET_TOTAL', totalCharacters: 10}
      ]);
    });

    it('should render components', () => {
      expect(wrapper.find(Header)).toHaveLength(1);
      expect(wrapper.find(HeroesList)).toHaveLength(1);
      expect(wrapper.find(HeroDetail)).toHaveLength(1);
      expect(wrapper.find(RecentlyVisited)).toHaveLength(1);
      expect(wrapper.find(Footer)).toHaveLength(1);
    });
  });
});

