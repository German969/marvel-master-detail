import axios from 'axios';
import apiKeys from '../config/api-keys';

const API_URL = 'https://gateway.marvel.com/v1/';
const CHARACTERS_PATH = 'public/characters';

export default {
  callService() {
    console.log('calling service..');

    axios.get(API_URL + CHARACTERS_PATH, {
      params: {
        apikey: apiKeys.dev
      }
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
};