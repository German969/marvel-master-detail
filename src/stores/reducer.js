import { combineReducers } from 'redux'
import {
  ADD_CHARACTERS,
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

const reducer = combineReducers({
  selected,
  characters,
  total
});

export default reducer;