import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

const bot = new TelegramBot(process.env.TOKEN, {

    polling: true
    
});

bot.on("polling_error", err => console.log(err.data.error.message));

bot.on('text', async msg => {
    await bot.sendMessage(msg.chat.id, msg.text);
})

bot.onText(/\/start/, async (msg) => {
    try {
        const keyboard = {
            reply_markup: {
                keyboard: [[{
                    text: 'Открыть приложение',
                    web_app: {url: 'https://github.com/Roamdev/1cebitExchangeWebApp'} 
                }]],
                resize_keyboard: true
            }
        };
        
        await bot.sendMessage(msg.chat.id, 'Привет! Нажми на кнопку, чтобы открыть приложение', keyboard);
    } catch (error) {
        console.error('Ошибка:', error);
    }
});
