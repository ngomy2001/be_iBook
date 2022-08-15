const mongoose = require('mongoose');
const { Schema } = mongoose;
const { LIBRARIAN_ROLE, MEMBER_ROLE } = require('../../Constants/role');
const RoleSchema = new Schema(
  {
    name: {
      type: String,
      enum: [LIBRARIAN_ROLE, MEMBER_ROLE],
    },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model('Role', RoleSchema);
module.exports = Role;
