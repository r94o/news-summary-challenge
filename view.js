class View {
  constructor(api) {
    this.api = api;
    this.searchListener();
  }

  async displayHeadlines(search = null) {
    await this.api.loadFeed(search)
      .then((feed) => {
        const headlineContainer = document.querySelector('#headline-container');
        feed.response.results.forEach((article) => {
          const newHeadlineDiv = document.createElement('div');
          const newHeadlineImg = document.createElement('img');
          const newHeadlineLink = document.createElement('a');

          newHeadlineDiv.className = 'headline';
          if ("fields" in article) newHeadlineImg.src = article.fields.thumbnail;
          newHeadlineLink.href = article.webUrl;
          newHeadlineLink.innerHTML = article.webTitle;

          newHeadlineDiv.append(newHeadlineImg);
          newHeadlineDiv.append(newHeadlineLink);
          headlineContainer.append(newHeadlineDiv);
        });
      });
  }

  searchListener() {
    const searchEl = document.querySelector('#search');
    searchEl.addEventListener('input', (e) => {
      document.querySelector('#headline-container').innerHTML = '';
      this.displayHeadlines(e.target.value);
    });
  }
}

module.exports = View;
