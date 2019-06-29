const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594520764112437279")
setInterval(function() {
channel.send(`hdpo6r`);
}, 30)
})

client.login(process.env.BOT_TOKEN);