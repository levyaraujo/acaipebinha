import { model, Schema } from "mongoose";

export const Address = model('Address', new Schema({
  address: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  complement: {
    type: String,
    required: true
  },
  neighbourhood: {
    type: String,
    required: true
  }
}));
