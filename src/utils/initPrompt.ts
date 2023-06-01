import { prompt } from "../lib/openAI/prompts/acaiAgent";

export function initPrompt(userName: string): string {
  return prompt.replace(/{{[\s]?name[\s]?}}/g, userName);
}
