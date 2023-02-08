import Twilio from "twilio/lib/rest/Twilio";

export class MessageHandler {
	phoneNumber: string;
	profileName: string;

	constructor(phoneNumber: string, profileName: string) {
		this.phoneNumber = phoneNumber;
		this.profileName = profileName;
	}
	private sendMessage(message?: string, media?: string[]) {
		const client = new Twilio(process.env.SID, process.env.TOKEN);

		client.messages
			.create({
				body: String(message),
				to: `whatsapp:+${this.phoneNumber}`, // Text this number
				from: `whatsapp:+${process.env.BOT}`, // From a valid Twilio number
				mediaUrl: media
			})
			.then((message) => console.log(message.sid));
	}

	onboard() {
		const images: string[] = ["https://i.imgur.com/S8pzlOP.png", "https://i.imgur.com/LSIO6mu.png",
			"https://i.imgur.com/gz8aBWQ.png",
			"https://i.imgur.com/omvFgyO.png",
			"https://i.imgur.com/FstohBc.png",
			"https://i.imgur.com/uBATpQM.png"];

		for (const image of images)
			this.sendMessage('', [image]);
	}
}
