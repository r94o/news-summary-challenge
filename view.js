class View {
  constructor(api) {
    this.api = api;
  }

  async displayHeadlines() {
    await this.api.loadFeed()
    .then(feed => {
      const headlineContainer = document.querySelector('#headline-container');
      feed.response.results.forEach(article => {
        const newHeadlineEl = document.createElement('h1');
        newHeadlineEl.innerHTML = article.webTitle;
        headlineContainer.append(newHeadlineEl);
      })
    })
  }

}

module.exports = View;