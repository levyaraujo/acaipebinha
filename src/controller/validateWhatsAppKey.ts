import { Request, Response } from "express";


export async function validateWhatsAppKey(request: Request, response: Response) {
	try {
		console.log('GET: Someone is pinging me!');

		const mode = request.query['hub.mode'];
		const token = request.query['hub.verify_token'];
		const challenge = request.query['hub.challenge'];

		if (
			mode &&
			token &&
			mode === 'subscribe' &&
			process.env.VERIFICATION_TOKEN === token
		) {
			return response.status(200).send(challenge);
		} else {
			return response.sendStatus(403);
		}
	} catch (error) {
		console.error({ error });
		return response.sendStatus(500);
	}
}
