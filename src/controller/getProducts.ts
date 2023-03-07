import { Request, Response } from "express";
import { Product } from "../models/Product";

export default async function getProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();
    return res.json(products).status(200);
  } catch (error) {
    console.log(error);
  }
}
