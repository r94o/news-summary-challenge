/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const View = require('./view');
const API = require('./api');
const mockAPIResponse = require('./mockAPIResponse');

jest.mock('./api');

describe('View', (done) => {

  test('#displayHeadlines - Current Headlines are displayed on page load', () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    API.mockImplementation(() => {
      return {
        loadFeed: () => {
          return Promise.resolve(mockAPIResponse);
        }
      }
    })
    const api = new API;
    const view = new View(api);
    view.displayHeadlines().then(() => {
      const headlineContainer = document.querySelector('#headline-container');
      expect(headlineContainer.children[0].innerHTML).toBe('Mocked API Response Headline');
      expect(headlineContainer.children[1].innerHTML).toBe('Second Headline');
      expect(headlineContainer.children[2].innerHTML).toBe('Third Headline');
    });

  })
})