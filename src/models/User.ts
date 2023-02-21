import { model, Schema } from "mongoose";

export const User = model("User", new Schema({
	name: {
		type: String,
		required: true
	},
	phone_number: {
		type: String,
		required: true
	},
	address: {
		type: Schema.Types.ObjectId,
		ref: 'Address'
	}
}));
