import axios from "axios";
import dotenv from "dotenv";
import { aiResponse } from "../lib/openAI/openai";
import { ChatCompletionRequestMessage } from "openai";
import { initPrompt } from "../utils/initPrompt";

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
        Authorization: `Bearer ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    const payload = {
      messaging_product: "whatsapp",
      preview_url: false,
      recipient_type: "individual",
      to: recipient,
      type: "text",
      text: {
        body: message,
      },
    };

    try {
      const response = await axios.post(url, payload, config);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async onboard(message: string) {
    const customerChat = {
      customer: {
        name: this.profileName,
        phone: this.phoneNumber,
      },
      messages: [
        {
          role: "system",
          content: initPrompt(this.profileName),
        },
      ],
    };

    const response =
      (await aiResponse([{ role: "user", content: message }])) ||
      "Não entendi, poderia repetir?";
    customerChat.messages.push({
      role: "assistant",
      content: response,
    });
    this.sendMessage(this.phoneNumber, response);
  }
}
