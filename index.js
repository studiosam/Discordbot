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
    client.on(eventName, (...args) => eventFunction.run(client, message, ...args));
  });
});

client.on('ready', function(){
    console.log('pret !');
    client.user.setGame('vec studiosam');
});


// client.on('message', message => {
//     if(message.content[0] === PREFIX){
//         if (message.author.bot) return;
//         if(message.content.indexOf(PREFIX) !== 0) return;
//         const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
//         const command = args.shift().toLowerCase();
//          if(message.content === '... long'){
//            let commandFile = require(`./cmds/long.js`);
//            commandFile.run(client, message, args, Discord);
//        }
//         try {
//            let commandFile = require(`./cmds/${command}.js`);
//            commandFile.run(client, message, args);
//          } catch (err) {
//          }
//         }
//     });
     client.on('messageReactionAdd', (reaction, user, guild) => {
         if(reaction.emoji.name === "🗑" && reaction.count >= 2 ) {
             reaction.message.delete(10)
         }
     });

     client.on("guildCreate", guild => {
       console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
     });

client.login(process.env.TOKEN)
