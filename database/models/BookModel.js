const mongoose = require('mongoose');
const { Schema } = mongoose;
const { VIE_LANGUAGE, ENG_LANGUAGE } = require('../../Constants/language');
// const CategoryModel = require('../models/CategoryModel');
// const AuthorModel = require('../models/AuthorModel');
// const PublisherModel = require('../models/PublisherModel');

const BookSchema = new Schema(
  {
    title: String,
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
    authorId: { type: Schema.Types.ObjectId, ref: 'Author' },
    publisherId: { type: Schema.Types.ObjectId, ref: 'Publisher' },
    language: {
      type: String,
      enum: [VIE_LANGUAGE, ENG_LANGUAGE],
      require: true,
      default: VIE_LANGUAGE,
    },
    numberOfPages: Number,
    numberOfCopies: Number,
    sample: String,
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
