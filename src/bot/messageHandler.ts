import Twilio from "twilio/lib/rest/Twilio";
import * as dotenv from "dotenv";
import { Product } from "../models/Product";
import path from 'node:path';

dotenv.config();


export class MessageHandler {
	phoneNumber: string;
	profileName: string;

	constructor(phoneNumber: string, profileName: string) {
		this.phoneNumber = phoneNumber;
		this.profileName = profileName;
	}
	private async sendMessage(message?: string, media?: string[]) {
		const client = new Twilio(process.env.SID, process.env.TOKEN);

		await client.messages
			.create({
				body: String(message),
				to: `whatsapp:+${this.phoneNumber}`, // Text this number
				from: `whatsapp:+${process.env.BOT}`, // From a valid Twilio number
				mediaUrl: media
			})
			.then((message) => console.log(message.sid));
	}

	async menu() {
		const site = process.env.site;
		console.log(path.join(__dirname), 'media');
		console.log(site);
		const data = await Product.find().then(data => {
			for (const product of data) {
				const image = `${site}/images/${product.imagePath}`;
				console.log(image);
				const description = `*${product.name}*\n\n${product.description}`;
				setInterval(() => { this.sendMessage(description); }, 3000);
			}
		});

		return data;
	}

	async onboard() {
		// this.menu();
		this.sendMessage(`Olá, *${this.profileName}!* Somos o *Açaí Pebinha*! Vamos montar o seu pedido? 📝\nDigite uma das opções acima. Ex.: 2`);
		// this.sendMessage(menu);
	}
}
