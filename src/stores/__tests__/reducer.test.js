import reducer from '../reducer';
import {
  ADD_CHARACTERS,
  SET_TOTAL,
  SET_SELECTED,
  ADD_RECENT,
  RESET_CHARACTERS,
  SET_TEMPORARY_HERO
} from '../store-actions';

describe('Reducer', () => {
  const initialState = {
    characters: [],
    selected: null,
    recentSearch: [],
    temporaryDetails: {},
    total: 0
  };
  const mockState = {
    characters: [{name: 'Spiderman', id: 123}, {name: 'Hulk', id: 567}],
    selected: 567,
    recentSearch: [{name: 'Spiderman', id: 123}],
    temporaryDetails: null,
    total: 2
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_CHARACTERS', () => {
    const result = reducer(initialState, {type: ADD_CHARACTERS, characters: mockState.characters});

    expect(result).toEqual({...initialState, characters: mockState.characters});
  });

  it('should handle SET_TOTAL', () => {
    const result = reducer(initialState, {type: SET_TOTAL, totalCharacters: mockState.total});

    expect(result).toEqual({...initialState, total: mockState.total});
  });

  it('should handle SET_SELECTED', () => {
    const result = reducer(initialState, {type: SET_SELECTED, characterId: mockState.selected});

    expect(result).toEqual({...initialState, selected: mockState.selected});
  });

  it('should handle ADD_RECENT', () => {
    const result = reducer(initialState, {type: ADD_RECENT, character: mockState.recentSearch[0]});

    expect(result).toEqual({...initialState, recentSearch: mockState.recentSearch});
  });

  it('should handle RESET_CHARACTERS', () => {
    const result = reducer(initialState, {type: RESET_CHARACTERS, characters: mockState.characters});

    expect(result).toEqual({...initialState, characters: mockState.characters});
  });

  it('should handle SET_TEMPORARY_HERO', () => {
    const result = reducer(initialState, {type: SET_TEMPORARY_HERO, character: mockState.characters[0]});

    expect(result).toEqual({...initialState, temporaryDetails: mockState.characters[0]});
  });
});