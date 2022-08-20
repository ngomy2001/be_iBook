const mongoose = require('mongoose');
const { Schema } = mongoose;
const {
  AVAILABLE_STATUS,
  RESERVED_STATUS,
  LOANED_STATUS,
  LOST_STATUS,
} = require('../../Constants/bookStatus');
const BookStatusSchema = new Schema(
  {
    name: {
      type: String,
      enum: [AVAILABLE_STATUS, RESERVED_STATUS, LOANED_STATUS, LOST_STATUS],
    },
  },
  {
    timestamps: true,
  }
);

const BookStatus = mongoose.model('BookStatus', BookStatusSchema);
module.exports = BookStatus;
