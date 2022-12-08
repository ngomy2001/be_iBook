const mongoose = require('mongoose');
const { Schema } = mongoose;
const CommentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'Account' },
    bookId: { type: Schema.Types.ObjectId, ref: 'Book' },
    content: { type: String },
  },
  {
    timestamps: true,
  }
);
const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;
