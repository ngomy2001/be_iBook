const mongoose = require('mongoose');
const { Schema } = mongoose;
const AccountSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    roleId: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;
