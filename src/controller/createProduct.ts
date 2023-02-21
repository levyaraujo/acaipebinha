import { Request, Response } from "express";
import { Product } from "../models/Product";


export default async function createProduct(request: Request, response: Response) {
	try {
		console.log(request.body);
		const imagePath = request.file?.filename;
		const { name, description, ingredients, size } = request.body;
		let price: number;
		if (size === 300) {
			price = 13;
		} else if (size === 500) {
			price = 20;
		} else {
			price = 30;
		}
		console.log(size);


		const product = await Product.create({
			name,
			description,
			imagePath,
			size,
			price,
			ingredients: ingredients ? JSON.parse(ingredients) : []
		});
		response.status(201).json(product);
	}
	catch (error) {
		console.error(error);
		response.sendStatus(500);
	}
}
