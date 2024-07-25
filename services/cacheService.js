const cache = {
    popularArticles: {}
  };
  
  exports.updateLikes = (articleId, likes) => {
    cache.popularArticles[articleId] = { ...cache.popularArticles[articleId], likes };
  };
  
  exports.updateViews = (articleId, views) => {
    cache.popularArticles[articleId] = { ...cache.popularArticles[articleId], views };
  };
  
  exports.getPopularArticles = () => {
    return cache.popularArticles;
  };
  