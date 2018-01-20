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
        if (message.author.bot) return;
        if(message.content.indexOf(PREFIX) !== 0) return;
        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        // if(command === 'hello'){
        //     message.channel.send('```World ! ```')
        // }
        // if(message.content === '... long'){
        //     message.channel.send({embed});
        // }
        try {
           let commandFile = require(`./cmds/${command}.js`);
           commandFile.run(client, message, args);
         } catch (err) {
           console.error(err);
         }
        }
        if (message.content === '... long') {
          message.channel.send({embed});
        }
        require(`./cmds/long.js`);
      });


client.login(process.env.TOKEN)
