import { Request, Response } from 'express';
import { MessageHandler } from '../utils/messageHandler';


export async function userMessageHandler(request: Request, response: Response) {
	const data = request.body;
	const profileName = data.ProfileName;
	const phoneNumber = data.WaId;
	const messageHandler = new MessageHandler(phoneNumber, profileName);
	console.log(data);
	console.log(profileName);
	messageHandler.onboard();

	return response.statusCode = 200;
}
