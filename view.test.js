/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const View = require('./view');
const API = require('./api');
const mockAPIResponse = require('./mockAPIResponse');

jest.mock('./api');

describe('View', () => {
  let view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    API.mockImplementation(() => {
      return {
        loadFeed: () => {
          return Promise.resolve(mockAPIResponse);
        }
      }
    })
    const mockAPI = new API;
    view = new View(mockAPI);
  });

  test('#displayHeadlines - multiple headline titles are displayed', () => {
    view.displayHeadlines().then(() => {
      const headlineContainer = document.querySelector('#headline-container');
      expect(headlineContainer.children[0].textContent).toBe('Mocked Headline 1');
      expect(headlineContainer.children[1].textContent).toBe('Mocked Headline 2');
      expect(headlineContainer.children[2].textContent).toBe('Mocked Headline 3');
    });
  });

  test('#displayHeadlines - Headline Images are displayed', () => {
    view.displayHeadlines().then(() => {
      const firstHeadline = document.querySelector('.headline');
      expect(firstHeadline.childNodes[0].src).toBe('https://mockedthumbnail1.com/');
      expect(firstHeadline.childNodes[1].textContent).toBe('Mocked Headline 1');
    });
  });

  test('#displayHeadlines - Headlines have hyperlinks to the Guardian', () => {
    view.displayHeadlines().then(() => {
      const firstHeadline = document.querySelector('.headline');
      expect(firstHeadline.children[1].href).toBe('https://www.mockedheadline1.com/')
    });
  });
})