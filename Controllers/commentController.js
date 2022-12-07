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
    console.log('aa', payload);
    const addNewComment = CommentRepository.createComment(payload);
    res.send(addNewComment);
  } catch (error) {}
};

module.exports = { getCommentById, addComment };
