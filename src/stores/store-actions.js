import serviceCaller from '../service/service-caller';

export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_SELECTED = 'SET_SELECTED';

export function setSelected(characterId) {
  return {
    type: SET_SELECTED,
    characterId
  };
}

function setTotal(totalCharacters) {
  return {
    type: SET_TOTAL,
    totalCharacters
  }
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
        let data = response.data.data;

        dispatch(addCharacters(data.results));

        return data;
      },
      (error) => {console.log('SERVICE FAILED -', error)}
    ).then((data) => {
      if (offset === 0 ) {
        dispatch(setSelected(data.results[0].id));
        dispatch(setTotal(data.total));
      }
    });
  };
}