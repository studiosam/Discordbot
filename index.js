const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});

const PREFIX = ".";
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
    if(message.content[0] === PREFIX){
      if (message.channel.id == '205659347718504449') {
        message.delete();
        return;
      }
        if (message.author.bot) return;
        if(message.content.indexOf(PREFIX) !== 0) return;
        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
         if(message.content === '... long'){
           let commandFile = require(`./cmds/long.js`);
           commandFile.run(client, message, args, Discord);
       }
        try {
           let commandFile = require(`./cmds/${command}.js`);
           commandFile.run(client, message, args);
         } catch (err) {}
        }
});



client.login(process.env.TOKEN)
