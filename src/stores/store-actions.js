import serviceCaller from '../service/service-caller';

export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const SET_SELECTED = 'SET_SELECTED';

export function setSelected(characterId) {
  return {
    type: SET_SELECTED,
    characterId
  };
}

function addCharacters(characters) {
  return {
    type: ADD_CHARACTERS,
    characters
  }
}

export function fetchCharacters(offset) {
  return function(dispatch) {
    return serviceCaller.getCharacters(offset).then(
      (response) => {
        let characters = response.data.data.results;

        dispatch(addCharacters(characters));

        return characters;
      },
      (error) => {console.log('SERVICE FAILED -', error)}
    ).then((characters) => {
      if (offset === 0 ) {
        dispatch(setSelected(characters[0].id))
      }
    });
  };
}