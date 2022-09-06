const mongoose = require('mongoose');
const { Schema } = mongoose;
const { VIE_LANGUAGE, ENG_LANGUAGE } = require('../../Constants/language');
const CategoryModel = require('../models/CategoryModel');
const AuthorModel = require('../models/AuthorModel');
const PublisherModel = require('../models/PublisherModel');

const BookSchema = new Schema(
  {
    title: String,
    categoryId: [{ type: Schema.Types.ObjectId, ref: CategoryModel }],
    authorId: [{ type: Schema.Types.ObjectId, ref: AuthorModel }],
    publisherId: [{ type: Schema.Types.ObjectId, ref: PublisherModel }],
    language: {
      type: String,
      enum: [VIE_LANGUAGE, ENG_LANGUAGE],
      require: true,
      default: VIE_LANGUAGE,
    },
    numberOfPages: Number,
    numberOfCopies: Number,
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
