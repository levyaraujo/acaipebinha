import { Request, Response } from "express";
import { Product } from "../models/Product";

export default async function (req: Request, res: Response) {
	try {
		const products = await Product.find({}, { name: 1, description: 1, prices: 1, ingredients: 1, sizes: 1 });
		console.log(products);

		return res.json(products).status(200);
	} catch (error) {
		console.log(error);
	}
}
