const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});

const PREFIX = ".";
const fs = require("fs");


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

     // client.on('messageReactionAdd', (reaction, user, guild) => {
     //     if(reaction.emoji.name === "🗑" && reaction.count >= 2 ) {
     //         reaction.message.delete(10)
     //     }
     // });

     client.on("guildCreate", guild => {
       console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
     });

client.login(process.env.TOKEN)
