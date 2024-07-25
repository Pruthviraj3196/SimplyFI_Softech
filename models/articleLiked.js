const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleLikedSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  articleId: { type: Schema.Types.ObjectId, ref: 'Article' }
}, { timestamps: true });

module.exports = mongoose.model('ArticleLiked', articleLikedSchema);
