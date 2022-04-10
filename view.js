class View {
  constructor(api) {
    this.api = api;
    this.searchListener();
  }

  async displayHeadlines(search = null) {
    await this.api.loadFeed(search)
    .then(feed => {
      const headlineContainer = document.querySelector('#headline-container');
      feed.response.results.forEach(article => {
        const newHeadlineDiv = document.createElement('div')
        newHeadlineDiv.className = 'headline';

        const newHeadlineImg = document.createElement('img')
        try {
          newHeadlineImg.src = article.fields.thumbnail
        } catch(err) {}
      
        const newHeadlineLink = document.createElement('a');
        newHeadlineLink.href = article.webUrl;
        newHeadlineLink.innerHTML = article.webTitle;
    
        newHeadlineDiv.append(newHeadlineImg);
        newHeadlineDiv.append(newHeadlineLink)
        headlineContainer.append(newHeadlineDiv);
      })
    })
  }
  searchListener() {
    const searchEl = document.querySelector('#search');
    searchEl.addEventListener('input', (e) => {
      document.querySelector('#headline-container').innerHTML = '';
      this.displayHeadlines(e.target.value);
    })
  }
  
}

module.exports = View;