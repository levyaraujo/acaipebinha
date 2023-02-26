import Twilio from "twilio/lib/rest/Twilio";
import * as dotenv from "dotenv";
import { Product } from "../models/Product";

dotenv.config();


export class MessageHandler {
	phoneNumber: string;
	profileName: string;

	constructor(phoneNumber: string, profileName: string) {
		this.phoneNumber = phoneNumber;
		this.profileName = profileName;
	}
	private async sendMessage(message?: string, media?: string[]): Promise<void> {
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
		const data = await Product.find().then(data => {
			return data;
		}
		);
		for (const product of data) {
			console.log(product);
			const image = `${site}/images/${product.imagePath}`;
			const description = `*${product.name}*\n\n_${product.description}_`;

			await new Promise(resolve => setTimeout(resolve, 2000));
			this.sendMessage(description, [image]);
		}
	}

	async onboard() {
		this.menu();
		this.sendMessage(`Olá, *${this.profileName}!* Somos o *Açaí Pebinha*! Vamos montar o seu pedido? 📝\nDigite uma das opções acima. Ex.: 2`);
		// this.sendMessage(menu);
	}
}
