import { Request, Response } from "express";
// import { Address } from "../models/Address";
// import { User } from "../models/User";

export default async function createUser(request: Request, response: Response) {
	try {
		const { user, address } = request.body;
		console.log(user);
		console.log(address);

		return response.json({ 'created': 'OK' }).status(201);
	} catch (error) {
		console.log(error);
	}
}
