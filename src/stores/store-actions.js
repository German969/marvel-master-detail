import serviceCaller from '../service/service-caller';
import { toHashPath, toSearchQuery } from "../utils/string-converter";
import { pushNewHeroPath } from "../utils/browser";

export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_SELECTED = 'SET_SELECTED';
export const ADD_RECENT = 'ADD_RECENT';
export const RESET_CHARACTERS = 'RESET_CHARACTERS';
export const SET_TEMPORARY_HERO = 'SET_TEMPORARY_HERO';

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

function setTemporaryCharacter(character) {
  return {
    type: SET_TEMPORARY_HERO,
    character
  }
}

export function setSelectedAndRecent(hero) {
  return (dispatch, getState) => {
    if (!hero) {
      return getState();
    } else {
      const includeRecent = !getState().recentSearch.find((recent) => recent.id === hero.id);

      pushNewHeroPath(hero.name);

      if (includeRecent) {
        return [dispatch(setSelected(hero.id)), dispatch(addRecent(hero))]
      } else {
        return dispatch(setSelected(hero.id))
      }
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

export function fetchOneCharacter(name) {
  return function(dispatch) {
    return serviceCaller.getCharacterByName(name).then(
      (response) => {
        let data = response.data.data;

        dispatch(setTemporaryCharacter(data.results));

        return data;
      },
      (error) => {console.log('SERVICE FAILED -', error)}
    ).then((data) => {
      if (data.count === 0) {
        dispatch(fetchCharacters(0))
      } else {
        dispatch(setSelectedAndRecent(data.results[0]))
      }
    });
  }
}

function getHeroByDeepLink(deepLink, characters) {
  const characterInStore = characters.find((character) => {
    const nameLink = toHashPath(character.name);

    return nameLink === deepLink;
  });

  return characterInStore ? characterInStore : null;
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
        const heroByDeepLink = getHeroByDeepLink(deepLink, getState().characters);
        const selectedHero = deepLink && heroByDeepLink ? heroByDeepLink : data.results[0];

        if (deepLink && !heroByDeepLink) {
          dispatch(fetchOneCharacter(toSearchQuery(deepLink)))
        } else {
          dispatch(setSelectedAndRecent(selectedHero));
        }

        dispatch(setTotal(data.total));
      }
    });
  };
}

export function searchCharacters(query) {
  return function (dispatch) {
    return serviceCaller.searchCharactersByName(query).then(
      (response) => {
        let data = response.data.data;

        dispatch(resetCharacters(data.results));

        return data;
      },
      (error) => {
        console.log('SERVICE FAILED -', error)
      }
    ).then((data) => {
      dispatch(setSelectedAndRecent(data.results[0]));
      dispatch(setTotal(data.total));
    });
  }
}