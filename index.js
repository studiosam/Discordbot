const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});

const config = require("./config.json");
//const PREFIX = ".";
const fs = require("fs");

fs.readdir("./cmds/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./cmds/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('ready', function(){
    console.log('pret !');
    client.user.setGame('vec studiosam');
});


client.on('message', message => {
  message.channel.send(":apple:")
    if(message.content[0] === config.prefix){
        if(message.content.indexOf(config.prefix) !== 0) return;
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
         if(message.content === '... long'){
           let commandFile = require(`./cmds/long.js`);
           commandFile.run(client, message, args, Discord);
       }
        try {
           let commandFile = require(`./cmds/${command}.js`);
           commandFile.run(client, message, args);
         } catch (err) {
         }
        }
    });
    client.on("guildMemberAdd", member => {
      const guild = member.guild;
      const defaultChannel = guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
       defaultChannel.send(`yo ${member}`,{embed: {
         "description": `${member} bienvenue sur ${guild.name} tu est le ${guild.memberCount} a rejoindre`,
        "color": 1413051,
         "image": {
           "url": "https://i.imgur.com/Z3qbHT0.gif"
         }
       }})
     });
     client.on('messageReactionAdd', (reaction, user) => {
         if(reaction.emoji.name === "💩") {
           reaction.message.delete()
         }
     });

     client.on("guildCreate", guild => {
       console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
     });

client.login(process.env.TOKEN)
