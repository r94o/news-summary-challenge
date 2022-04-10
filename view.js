class View {
  constructor(api) {
    this.api = api;
  }

  async displayHeadlines() {
    await this.api.loadFeed()
    .then(feed => {
      const headlineContainer = document.querySelector('#headline-container');
      feed.response.results.forEach(article => {
        const newHeadlineDiv = document.createElement('div')
        newHeadlineDiv.className = 'headline';

        const newHeadlineImg = document.createElement('img')

        newHeadlineImg.src = article.fields.thumbnail

        const newHeadlineHeader = document.createElement('h1');
        newHeadlineHeader.innerHTML = article.webTitle;
        
        newHeadlineDiv.append(newHeadlineImg);
        newHeadlineDiv.append(newHeadlineHeader)

        headlineContainer.append(newHeadlineDiv);
      })
    })
  }

}

module.exports = View;