import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default class Bot {
	profileName: string;
	phoneNumber: string;

	constructor(profileName: string, phoneNumber: string) {
		this.profileName = profileName;
		this.phoneNumber = phoneNumber;
	}

	private async sendMessage(recipient: string, message: string) {
		const url = `${process.env.WHATSAPP_URL}`;
		const config = {
			headers: {
				'Authorization': `Bearer ${process.env.TOKEN}`,
				"Content-Type": "application/json"
			}
		};

		const payload = {
			"messaging_product": "whatsapp",
			"preview_url": false,
			"recipient_type": "individual",
			"to": recipient,
			"type": "text",
			"text": {
				"body": message
			}
		};

		try {
			const response = await axios.post(url, payload, config);
			return response;
		} catch (error) {
			console.log(error);
		}
	}

	onboard() {
		this.sendMessage(this.phoneNumber, `Olá, *${this.profileName}*! Tudo bem? Acesse o link abaixo e faça seu pedido! 🥰 \n\nhttps://acaipebinha.tunnelto.dev/`);
	}
}
