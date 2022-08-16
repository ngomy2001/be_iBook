const mongoose = require('mongoose');
const { Schema } = mongoose;
const AuthorSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;
