exports.run = (client, member,message) => {
if(message.content[0] === PREFIX){
    if (message.author.bot) return;
    if(message.content.indexOf(PREFIX) !== 0) return;
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
     if(message.content === '... long'){
       let commandFile = require(`../cmds/long.js`);
       commandFile.run(client, message, args, Discord);
   }
    try {
       let commandFile = require(`../cmds/${command}.js`);
       commandFile.run(client, message, args);
     } catch (err) {
     }
    }
  }
