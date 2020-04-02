import axios from 'axios';
import apiKeys from '../config/api-keys';

const API_URL = 'https://gateway.marvel.com/v1/';
const CHARACTERS_PATH = 'public/characters';

export default {
  getCharacters(offset = 0) {
    let limit = offset ? 10 : 20;

    return axios.get(API_URL + CHARACTERS_PATH, {
      params: {
        apikey: apiKeys.dev,
        offset,
        limit
      }
    })
  },

  searchCharactersByName(query) {
    let params = {
      apikey: apiKeys.dev
    };

    if (query !== '') {
      params.nameStartsWith = query;
    }

    return axios.get(API_URL + CHARACTERS_PATH, {
      params: params
    })
  },

  getCharacterByName(name) {
    return axios.get(API_URL + CHARACTERS_PATH, {
      params: {
        apikey: apiKeys.dev,
        name: name
      }
    })
  }
};