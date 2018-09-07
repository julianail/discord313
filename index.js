const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
 console.log(`Bot is online!`);
 bot.user.setGame("Coded by Julian#9727");

});

bot.login(botconfig.token);
