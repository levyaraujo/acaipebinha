import { model, Schema } from "mongoose";


export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  sizes: {
    type: [Number],
    default: [300, 500, 700]
  },
  prices: {
    type: [Number],
    default: [13, 20, 30],
  },
  ingredients: {
    type: [{
      name: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true,
      },
    }]
  }
}));

