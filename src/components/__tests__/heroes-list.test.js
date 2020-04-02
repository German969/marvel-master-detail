import React from 'react';
import {configure, shallow} from 'enzyme';
import {mockStore} from '../../__mocks__/store-mock';
import { HeroesList } from "../heroes-list";
import TextField from '@material-ui/core/TextField';
import TablePagination from '@material-ui/core/TablePagination';
import Adapter from 'enzyme-adapter-react-16';
import Button from '@material-ui/core/Button';
import SvgIcon from "@material-ui/core/SvgIcon";
import HeroRow from '../hero-row';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";
import * as ReactReduxHooks from "../../stores/react-redux-hooks";

configure({adapter: new Adapter()});
window.scrollTo = jest.fn();

describe('Heroes List', () => {
  let wrapper;
  let store;
  const classes = {
    heroesList: 'heroesList',
    searchRow: 'searchRow',
    searchField: 'searchField',
    searchButton: 'searchButton'
  };

  beforeEach(() => {
    store = configureStore([thunk])(mockStore);

    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(state => store.getState());

    wrapper = shallow(<HeroesList store={store} classes={classes} />);
  });

  describe('on mount', () => {
    it('should render search field', () => {
      expect(wrapper.find(TextField).props()).toMatchObject({
        id: 'outlined-search',
        label: 'Search Heroes',
        type:'search',
        variant: 'outlined',
        size: 'small',
        className: classes.searchField,
        value: ''
      });
    });

    it('should render search button', () => {
      expect(wrapper.find(Button).props()).toMatchObject({
        variant: 'contained',
        className: classes.searchButton
      });
      expect(wrapper.find(SvgIcon).props()).toMatchObject({viewBox: '0 0 550 550'});
    });

    it('should render rows', () => {
      expect(wrapper.find(HeroRow)).toHaveLength(4);
    });

    it('should render pagination', () => {
      expect(wrapper.find(TablePagination).props()).toMatchObject({
        rowsPerPageOptions: [5, 10, 20],
        count: 10,
        colSpan: 5,
        rowsPerPage: 10,
        page: 0,
        SelectProps: {
          inputProps: { 'aria-label': 'rows per page' },
          native: true,
        }
      });
    });
  });
});


