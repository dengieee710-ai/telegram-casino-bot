const { Telegraf } = require('telegraf');

// ВАШ ТОКЕН
const BOT_TOKEN = '8221599561:AAFLmtDSjDAea1tC8-6Z-vdK0J3tCjF8NkU';

// ВАША ССЫЛКА (ИСПРАВЛЕНО)
const WEBAPP_URL = 'https://graceful-sable-8dea09.netlify.app';

const bot = new Telegraf(BOT_TOKEN);

// Команда /start
bot.start((ctx) => {
    ctx.reply(
        `🎰 ДОБРО ПОЖАЛОВАТЬ В ROYAL CASINO! 🎰\n\n` +
        `👑 Ваш баланс: 1000 виртуальных монет\n` +
        `🎮 Выберите игру и выигрывайте!\n\n` +
        `👇 Нажмите на кнопку ниже, чтобы начать играть!`,
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🎮 ИГРАТЬ СЕЙЧАС 🎮', web_app: { url: WEBAPP_URL } }]
                ]
            }
        }
    );
});

// Запуск бота
bot.launch();
console.log('✅ Бот успешно запущен!');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
