import { model, Schema } from "mongoose";

export const Order = model("Order", new Schema({
	product: {
		type: Schema.Types.ObjectId,
		ref: 'Product'
	},
	quantity: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	status: {
		type: String,
		enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
		default: 'Pending'
	},
	created_at: {
		type: Date,
		default: Date.now
	}
}));
