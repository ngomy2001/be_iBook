const CommentRepository = require('../repositories/CommentRepository');
const getCommentById = async (req, res, next) => {
  const { bookId } = req.params;
  const getComment = await CommentRepository.getComment(bookId);
  res.send(getComment);
  return res.status(200).send(categories);
};

const addComment = async (req, res) => {
  try {
    const { userId, bookId, content } = req.body;
    const payload = { userId, bookId, content };
    const addNewComment = CommentRepository.createComment(payload);
    res.send(addNewComment);
  } catch (error) {
    console.log(
      '🚀 ~ file: commentController.js ~ line 16 ~ addComment ~ error',
      error
    );
  }
};

module.exports = { getCommentById, addComment };
