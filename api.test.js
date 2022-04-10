const API = require('./api')
const mockAPIResponse = require('./mockAPIResponse')
require('jest-fetch-mock').enableMocks();

describe('API', () => {
  test('#loadFeed', () => {
    const api = new API();
    fetch.mockResponseOnce(JSON.stringify(mockAPIResponse));

    api.loadFeed().then(data => {
      expect(data).toStrictEqual(mockAPIResponse);
    })
  })
})