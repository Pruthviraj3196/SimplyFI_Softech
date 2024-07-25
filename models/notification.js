const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  articleId: { type: Schema.Types.ObjectId, ref: 'Article' },
  message: String
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
