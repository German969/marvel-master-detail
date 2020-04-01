import { combineReducers } from 'redux'
import {
  ADD_CHARACTERS,
  SET_SELECTED
} from "./store-actions";

function selected(state = null, action) {
  if (action.type === SET_SELECTED) {
    return action.characterId;
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
  characters
});

export default reducer;