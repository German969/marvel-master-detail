import * as actions from '../store-actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import serviceCaller from '../../service/service-caller';
import { responseMock } from '../../__mocks__/response-mock';

jest.mock('../../service/service-caller');

describe('actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  beforeEach(() => {
    serviceCaller.getCharacters.mockClear();
    serviceCaller.getCharacters.mockImplementation(() => {
      return new Promise((resolve) => {
        resolve(responseMock)
      });
    });
  });

  it('create add characters action when fetch characters is done', () => {
    const expectedActions = [
      { type: 'ADD_CHARACTERS', characters: responseMock.data.data.results }
    ];
    const store = mockStore({ characters: [] });

    return store.dispatch(actions.fetchCharacters()).then(() => {
      expect(serviceCaller.getCharacters).toHaveBeenCalledTimes(1);
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should log an error if the service call fails', () => {
    const store = mockStore({ characters: {} });
    const testError = {error: 'ERROR_TEST'};

    serviceCaller.getCharacters.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        reject(testError);
      });
    });
    global.console = {
      log: jest.fn()
    };

    return store.dispatch(actions.fetchCharacters()).then(() => {
      expect(serviceCaller.getCharacters).toHaveBeenCalledTimes(1);
      expect(store.getActions()).toEqual([]);
      expect(global.console.log).toHaveBeenCalledWith("SERVICE FAILED -", testError);
    });
  });
});