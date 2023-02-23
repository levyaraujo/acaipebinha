import { Request, Response } from 'express';
import { MessageHandler } from './messageHandler';


export async function userMessageHandler(request: Request, response: Response) {
	const data = request.body;
	const profileName = data.ProfileName;
	const phoneNumber = data.WaId;
	const message = data.Body;
	const messageHandler = new MessageHandler(phoneNumber, profileName);
	console.log(`${profileName}: ${message}`);
	console.log(profileName);
	messageHandler.onboard();

	return response.status(200);
}
