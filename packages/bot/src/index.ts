import { bot } from "./bot";
import http from "serverless-http";

// Only for development
if (require.main === module) {
  bot.launch();
}

export const handler = http(bot.webhookCallback("/webhook"));
