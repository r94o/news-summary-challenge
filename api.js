const apiKey = require('./env.js');

class API {
  async loadFeed() {
    const response = await fetch(`https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`);
    return await response.json();
  }
}

module.exports = API;
