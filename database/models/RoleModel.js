const mongoose = require('mongoose');
const { Schema } = mongoose;
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
