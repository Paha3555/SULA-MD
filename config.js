const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Put the session-id here.", // ඔයාගේ session id එක දාන්න
MONGODB: process.env.MONGODB || "mongodb+srv://sulabijja:sulabijja@demon.d4ov0.mongodb.net/?retryWrites=true&w=majority&appName=DEMON", // ඔයාගේ mongodb url එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/WY2qBYz/SulaMd.jpg",
BOT_NAME: process.env.BOT_NAME || "𝐒𝐔𝐋𝐀-𝐌𝐃",
LANG: process.env.BOT_LANG || 'EN' ,
AUTO_TIKTOK_SENDER: process.env.AUTO_TIKTOK_SENDER === undefined ? "true" : process.env.AUTO_TIKTOK_SENDER,
TIKTOK_SEND_JID: process.env.TIKTOK_SEND_JID === undefined ? "94781121579@s.whatsapp.net" : process.env.TIKTOK_SEND_JID,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
