const mongoose = require('mongoose');
const { Schema } = mongoose;
const TransactionSchema = new Schema(
  {
    transactionId: String,
    amount: Number,
    status: String,
  },
  {
    timestamps: true,
  }
);
const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;
