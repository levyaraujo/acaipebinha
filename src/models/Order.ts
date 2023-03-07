import { model, Schema } from "mongoose";

export const Order = model("Order", new Schema({
  products: {
    required: true,
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    }],
  },
  total: {
    type: Number,
    required: true
  },
  address: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Address',
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
}));
