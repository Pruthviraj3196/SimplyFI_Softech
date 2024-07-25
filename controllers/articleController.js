const Article = require('../models/article');
const ArticleLiked = require('../models/articleLiked');
const ArticleViewed = require('../models/articleViewed');
const NotificationService = require('../services/notificationService');
const CacheService = require('../services/cacheService');

exports.createArticle = async (req, res) => {
  const { title, author, body } = req.body;
  const article = new Article({ title, author, body });
  await article.save();
  res.status(201).send(article);
};

exports.likeArticle = async (req, res) => {
  const { articleId, userId } = req.body;
  const article = await Article.findById(articleId);
  article.likes++;
  await article.save();

  const articleLiked = new ArticleLiked({ userId, articleId });
  await articleLiked.save();

  CacheService.updateLikes(articleId, article.likes);
  NotificationService.notifyUser(article.author, articleId);

  res.send(article);
};

exports.viewArticle = async (req, res) => {
  const { articleId, userId } = req.body;
  const article = await Article.findById(articleId);
  article.views++;
  await article.save();

  const articleViewed = new ArticleViewed({ userId, articleId });
  await articleViewed.save();

  CacheService.updateViews(articleId, article.views);

  res.send(article);
};
