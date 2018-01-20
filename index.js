const bot = require('discord.js');
const bot = new Discord.Client({autoReconnect: true});

const PREFIX = ".";
const fs = require("fs");

bot.on('ready', function(){
    console.log('pret !');
    bot.user.setGame('vec studiosam');
});


bot.on('message', message => {
    if(message.content[0] === PREFIX){
        const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if(command === 'hello'){
            message.channel.send('```World ! ```')
        }

        try {
          let commandFile = require(`./modules/long.js`);
          commandFile.run(client, message, args);
          } catch (err) {
          console.error(err);
        }
        }});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('bienvenue sur mon serveur '+ member.displayName);
    }).catch(console.error)
});

bot.on('guildMemberRemove', member => {
    member.createDM().then(channel => {
        return channel.send('Au revoir '+ member.displayName);
    }).catch(console.error)
});

bot.login(process.env.TOKEN)
