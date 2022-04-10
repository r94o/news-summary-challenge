const apiKey = require('./env.js');

class API {
  async loadFeed(search) {
    let apiUrl = `https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`;
    if (search) apiUrl = `https://content.guardianapis.com/search?q=${search}&api-key=${apiKey}&show-fields=thumbnail`;
    const response = await fetch(apiUrl);
    return await response.json();
  }
}

module.exports = API;
