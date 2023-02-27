const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected', 'Completed'],
    default: 'Pending'
  },

  orderBy: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }
  
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
