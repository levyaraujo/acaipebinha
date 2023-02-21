import { model, Schema } from "mongoose";


const ProductSchema = new Schema({
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
	size: {
		type: Number,
		enum: [300, 500, 700]
	},
	price: {
		type: Number,
		required: true,
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
});

ProductSchema.pre('save', function async(done) {
	if (this.size === 300) {
		this.price = 13;
	} else if (this.size === 500) {
		this.price = 20;
	} else {
		this.price = 30;
	}

	done();
});

export const Product = model('products', ProductSchema);

