const TelegramBot=require('node-telegram-bot-api');
const axios=require('axios');
const dotenv=require('dotenv');
dotenv.config();
const TOKEN=process.env.BOT_TOKEN;
const bot=new TelegramBot(TOKEN,{polling:true});

bot.on('message',(msg)=>{
    const text=msg.text;
    console.log(`Received message: ${text}`);

    bot.sendMessage(msg.chat.id,`You Said :, ${text}!`);
});

bot.onText(/\/start/,(msg)=>{
    bot.sendMessage(msg.chat.id,"Hello I am Gurav Bot How Cna i Help You");
});
bot.onText(/\/joke/,async (msg)=>{
    const response=await axios.get('https://official-joke-api.appspot.com/random_joke');
    bot.sendMessage(msg.chat.id,response.data.setup+'\n'+response.data.punchline);
});