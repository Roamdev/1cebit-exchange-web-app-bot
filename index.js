import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

const bot = new TelegramBot(process.env.TOKEN, {

    polling: true
    
});

bot.on("polling_error", err => console.log(err.data.error.message));

bot.on('text', async msg => {

    await bot.sendMessage(msg.chat.id, msg.text);

})