const apiKey = require('./env.js');

class API {
  async loadFeed() {
    const response = await fetch(`https://content.guardianapis.com/search?api-key=${apiKey}`);
    return await response.json();
  }
}

module.exports = API;
