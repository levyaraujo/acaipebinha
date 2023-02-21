import { Request, Response } from "express";
import { Product } from "../models/Product";


export default async function createProduct(request: Request, response: Response) {
	try {
		console.log(request.body);
		const imagePath = request.file?.filename;
		const { name, description, ingredients, size } = request.body;
		console.log(size);


		const product = await Product.create({
			name,
			description,
			imagePath,
			size,
			ingredients: ingredients ? JSON.parse(ingredients) : []
		});
		response.status(201).json(product);
	}
	catch (error) {
		console.error(error);
		response.sendStatus(500);
	}
}
