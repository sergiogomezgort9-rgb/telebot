const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "AQUI_VA_TU_TOKEN";
const bot = new TelegramBot(TOKEN, { polling: true });


console.log("🤖 Sergio Bot encendido y listo");


bot.on("message", (msg) => {
const chatId = msg.chat.id;
const text = msg.text;
const pushName = msg.from.first_name || "Usuario";


if (!text) return;


if (text === "/menu") {
const imageUrl = "https://i.imgur.com/tuImagen.jpg";
const caption = ♣*𝑺𝒆𝒓𝒈𝒊𝒐 𝑩𝒐𝒕*🌉 ╭─────────────────╮ ┊ Usuario: *${pushName}* ┊ /start ┊ /ping ┊ /menu ┊ /info ┊ /hola ╰─────────────────╯;
bot.sendPhoto(chatId, imageUrl, { caption, parse_mode: "Markdown" });
return;
}


if (text === "/start") {
bot.sendMessage(chatId, Hola 👋 ${pushName}, escribe /menu);
return;
}


if (text === "/ping") {
bot.sendMessage(chatId, "pong 🏓");
return;
}


if (text === "/info") {
bot.sendMessage(chatId, "🤖 Sergio Bot v1.0");
return;
}


if (text === "/hola") {
bot.sendMessage(chatId, "Hola 😎");
return;
}


bot.sendMessage(chatId, "❌ Comando no reconocido. Usa /menu");
});
