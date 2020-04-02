import serviceCaller from '../service/service-caller';
import { toHashPath } from "../utils/string-converter";
import { pushNewHeroPath } from "../utils/browser";

export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_SELECTED = 'SET_SELECTED';
export const ADD_RECENT = 'ADD_RECENT';
export const RESET_CHARACTERS = 'RESET_CHARACTERS';

function setSelected(characterId) {
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

function addRecent(character) {
  return {
    type: ADD_RECENT,
    character
  }
}

export function setSelectedAndRecent(characterId, name) {
  return (dispatch, getState) => {
    const includeRecent = !getState().recentSearch.find((recent) => recent.id === characterId);

    if (name) {
      pushNewHeroPath(name);
    }

    if (includeRecent) {
      return [dispatch(setSelected(characterId)), dispatch(addRecent({id: characterId, name}))]
    } else {
      return dispatch(setSelected(characterId))
    }
  };
}

function addCharacters(characters) {
  return {
    type: ADD_CHARACTERS,
    characters
  }
}

function resetCharacters(characters) {
  return {
    type: RESET_CHARACTERS,
    characters
  }
}

function getHeroIdByDeepLink(deepLink, characters) {
  const characterInStore = characters.find((character) => {
    const nameLink = toHashPath(character.name);

    return nameLink === deepLink;
  });

  return characterInStore ? characterInStore.id : null;
}

export function fetchCharacters(offset, deepLink) {
  return function(dispatch, getState) {
    return serviceCaller.getCharacters(offset).then(
      (response) => {
        let data = response.data.data;

        dispatch(addCharacters(data.results));

        return data;
      },
      (error) => {console.log('SERVICE FAILED -', error)}
    ).then((data) => {
      if (offset === 0 ) {
        const heroByDeepLink = getHeroIdByDeepLink(deepLink, getState().characters);
        const selectedHero = deepLink && heroByDeepLink ? heroByDeepLink : data.results[0].id;
        const selectedHeroName = deepLink && heroByDeepLink ? null : data.results[0].name;

        dispatch(setSelectedAndRecent(selectedHero, selectedHeroName));
        dispatch(setTotal(data.total));
      }
    });
  };
}

export function searchCharacters(query) {
  return function(dispatch) {
    return serviceCaller.searchCharactersByName(query).then(
      (response) => {
        let data = response.data.data;

        dispatch(resetCharacters(data.results));

        return data;
      },
      (error) => {console.log('SERVICE FAILED -', error)}
    ).then((data) => {
      dispatch(setSelectedAndRecent(data.results[0].id, data.results[0].name));
      dispatch(setTotal(data.total));
    });
  }
}