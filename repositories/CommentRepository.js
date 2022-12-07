const Comment = require('../database/models/CommentModel');

const getComment = async (bookId) => {
  try {
    const comment = await Comment.find({ bookId });
    return comment;
  } catch (error) {}
};
const createComment = async (payload) => {
  try {
    const comment = await Comment.create(payload);
    return comment;
  } catch (error) {}
};

module.exports = {
  getComment,
  createComment,
};
