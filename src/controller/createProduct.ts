import { Request, Response } from "express";
import { Product } from "../models/Product";
import { uploadImage } from "../middlewares/imageUploader";

export default async function createProduct(request: Request, response: Response) {
	try {
		console.log(request.body);
		const imagePath = request.file?.filename;
		const { name, description, ingredients } = request.body;

		console.log(imagePath);
		const product = await Product.create({
			name,
			description,
			imagePath,
			ingredients: ingredients ? JSON.parse(ingredients) : []
		});
		uploadImage(request, response);
		response.status(201).json(product);
	}
	catch (error) {
		console.error(error);
		response.sendStatus(500);
	}
}
