const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.post('/create', articleController.createArticle);
router.post('/like', articleController.likeArticle);
router.post('/view', articleController.viewArticle);

module.exports = router;
