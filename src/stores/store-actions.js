import serviceCaller from '../service/service-caller';

export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_SELECTED = 'SET_SELECTED';
export const ADD_RECENT = 'ADD_RECENT';

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

function addRecent(characterId) {
  return {
    type: ADD_RECENT,
    characterId
  }
}

export function setSelectedAndRecent(characterId) {
  return (dispatch) => [dispatch(setSelected(characterId)), dispatch(addRecent(characterId))];
}

function addCharacters(characters) {
  return {
    type: ADD_CHARACTERS,
    characters
  }
}

function getHeroIdByDeepLink(deepLink, characters) {
  const characterInStore = characters.find((character) => {
    const nameLink = character.name.replace(/\s+/g, '-').toLowerCase();
    console.log(nameLink, deepLink, nameLink === deepLink);

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

        dispatch(setSelectedAndRecent(selectedHero));
        dispatch(setTotal(data.total));
      }
    });
  };
}