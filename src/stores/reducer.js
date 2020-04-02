import { combineReducers } from 'redux'
import {
  ADD_CHARACTERS,
  ADD_RECENT,
  SET_SELECTED,
  SET_TOTAL
} from "./store-actions";

function selected(state = null, action) {
  if (action.type === SET_SELECTED) {
    return action.characterId;
  } else {
    return state;
  }
}

function total(state = 0, action) {
  if (action.type === SET_TOTAL) {
    return action.totalCharacters;
  } else {
    return state;
  }
}

function characters(state = [], action) {
  if (action.type === ADD_CHARACTERS) {
    return [
      ...state,
      ...action.characters
    ];
  } else {
    return state;
  }
}

function recentSearch(state = [], action) {
  if (action.type === ADD_RECENT) {
    return state.length === 3 ?
      [ action.characterId, state[0], state[1] ] :
      [ action.characterId, ...state ];
  } else {
    return state;
  }
}

const reducer = combineReducers({
  selected,
  characters,
  total,
  recentSearch
});

export default reducer;