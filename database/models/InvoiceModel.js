const mongoose = require('mongoose');
const { Schema } = mongoose;
const {
  COMPLETED_STATUS,
  CANCELED_STATUS,
  WAITING_STATUS,
  DELIVERED_STATUS,
  LOST_STATUS,
} = require('../../Constants/invoiceStatus');

const InvoiceSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'Account' },
    bookCopyId: { type: Schema.Types.ObjectId, ref: 'BookCopy' },
    status: {
      type: String,
      enum: [
        COMPLETED_STATUS,
        CANCELED_STATUS,
        WAITING_STATUS,
        DELIVERED_STATUS,
        LOST_STATUS,
      ],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model('Invoice', InvoiceSchema);
module.exports = Invoice;
