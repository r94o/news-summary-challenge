const API = require('./api');
const View = require('./view');

const api = new API();
const view = new View(api);

view.displayHeadlines();
