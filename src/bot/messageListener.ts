import { Request, Response } from 'express';
import Bot from './messageHandler';


export async function userMessageHandler(request: Request, response: Response) {
	const data = request.body;
	console.log(data);
	let profileName: string;
	const message = data.entry[0].changes[0].value;

	try {

		if ('contacts' in data.entry[0].changes[0].value && 'messages' in message) {
			profileName = message.contacts[0].profile.name;
			const phoneNumber = message.contacts[0].wa_id;
			const bot = new Bot(profileName, phoneNumber);
			bot.onboard();
		}

		return response.sendStatus(200);
	} catch (error) {
		console.error({ error });
		return response.sendStatus(500);
	}
}
