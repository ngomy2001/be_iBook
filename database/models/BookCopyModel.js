const mongoose = require('mongoose');
const { Schema } = mongoose;
const {
  AVAILABLE_STATUS,
  RESERVED_STATUS,
  LOANED_STATUS,
  LOST_STATUS,
} = require('../../Constants/bookStatus');

const BookModel = require('../models/BookModel');

const BookCopySchema = new Schema(
  {
    bookId: [{ type: Schema.Types.ObjectId, ref: BookModel }],
    status: {
      type: String,
      enum: [AVAILABLE_STATUS, RESERVED_STATUS, LOANED_STATUS, LOST_STATUS],
      require: true,
      default: AVAILABLE_STATUS,
    },
  },
  {
    timestamps: true,
  }
);

const BookCopy = mongoose.model('BookCopy', BookCopySchema);
module.exports = BookCopy;
