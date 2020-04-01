export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const SET_SELECTED = 'SET_SELECTED';

export default {
  addCharacters(characters) {
    return {
      type: ADD_CHARACTERS,
      characters
    }
  },

  setSelected(characterId) {
    return {
      type: SET_SELECTED,
      characterId
    }
  }
}