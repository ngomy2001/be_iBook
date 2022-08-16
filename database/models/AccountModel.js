const mongoose = require('mongoose');
const { Schema } = mongoose;
const { LIBRARIAN_ROLE, MEMBER_ROLE } = require('../../Constants/role');

const AccountSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    role: {
      type: String,
      enum: [LIBRARIAN_ROLE, MEMBER_ROLE],
      require: true,
      default: MEMBER_ROLE,
    },
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;
