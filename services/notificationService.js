const Notification = require('../models/notification');
const User = require('../models/user');

exports.notifyUser = async (author, articleId) => {
  const user = await User.findOne({ name: author });
  if (user) {
    const notification = new Notification({
      userId: user._id,
      articleId,
      message: `Your article was liked!`
    });
    await notification.save();
  }
};
