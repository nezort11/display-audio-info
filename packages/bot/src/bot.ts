import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import * as dotenv from "dotenv";
dotenv.config();

export const bot = new Telegraf(process.env.BOT_TOKEN as string);

bot.start(async (context) => {
  await context.reply(
    "Hi there. Please send me an audio file to display it's info"
  );
});

bot.on(message("audio"), async (context) => {
  const audioTitle =
    context.message.audio.title ?? context.message.audio.file_name;
  await context.reply(audioTitle ?? "Audio has no title");
});
