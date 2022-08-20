const mongoose = require('mongoose');
const { Schema } = mongoose;
const PublisherSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Publisher = mongoose.model('Publisher', PublisherSchema);
module.exports = Publisher;
