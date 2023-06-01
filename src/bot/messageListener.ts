import { Request, Response } from "express";
import Bot from "./messageHandler";

const content = {
  value: {
    messaging_product: "whatsapp",
    metadata: {
      display_phone_number: "15550910644",
      phone_number_id: "103179066135470",
    },
    contacts: [{ profile: { name: "Levy" }, wa_id: "559481362600" }],
    messages: [
      {
        from: "559481362600",
        id: "wamid.HBgMNTU5NDgxMzYyNjAwFQIAEhgSQzUwQkE5RUUwQTg4QjI4Q0QyAA==",
        timestamp: "1685653761",
        text: { body: "olá" },
        type: "text",
      },
    ],
  },
  field: "messages",
};

export async function userMessageHandler(request: Request, response: Response) {
  const data = request.body;
  console.log(data);
  let profileName: string;
  const message = data.entry[0].changes[0].value;
  const userMessage = message.messages[0].text.body;
  console.log(userMessage);
  console.log(JSON.stringify(data.entry[0].changes[0]));

  try {
    if ("contacts" in data.entry[0].changes[0].value && "messages" in message) {
      profileName = message.contacts[0].profile.name;
      const phoneNumber = message.contacts[0].wa_id;
      const bot = new Bot(profileName, phoneNumber);
      await bot.onboard(userMessage);
    }

    return response.sendStatus(200);
  } catch (error) {
    console.error({ error });
    return response.sendStatus(500);
  }
}
