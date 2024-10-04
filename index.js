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

bot.onText(/\/bitcoin/,async (msg)=>{
    const response=await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const amount=response.data.bitcoin.usd;
    bot.sendMessage(msg.chat.id, `The current price of Bitcoin is $${amount}`);
});
bot.onText(/\/etherum/,async (msg)=>{
    const response=await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr');
    const amount=response.data.ethereum.inr;
    bot.sendMessage(msg.chat.id, `The current price of Etherum is $${amount}`);
});