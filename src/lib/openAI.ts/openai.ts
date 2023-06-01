import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

export async function aiResponse(
  messages: ChatCompletionRequestMessage[]
): Promise<string | undefined> {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0,
    max_tokens: 256,
    messages,
  });

  return completion.data.choices[0].message?.content;
}
