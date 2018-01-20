const Discord = require('discord.js');
const client = new Discord.Client({autoReconnect: true});

const PREFIX = ".";
const fs = require("fs");



client.on('ready', function(){
    console.log('pret !');
    bot.user.setGame('vec studiosam');
});


bot.on('message', message => {
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

        }
      });

//  const embed = new Discord.RichEmbed()
// .setTitle("Comment utiliser les long artworks")
//
// .setColor(3447003)
// .setDescription(`[Le guide complet](http://steamcommunity.com/sharedfiles/filedetails/?id=1248810682)`)
// .setThumbnail("https://images-ext-1.discordapp.net/external/0cYDE6RVJBguQycSxmuwZiL_bdubAAzI7L41G09QUS4/http/i.oddball.tf/TRlwX.gif?width=80&height=80")
// .addField("Etapes 1",
//   `Ouvre cette page : http://steamcommunity.com/sharedfiles/edititem/767/3/
//   Choisi ton fichier et envoie le.`)
// .addField("Etapes 2",
// `ouvrir la consol:
// sur Chrome : \`Ctrl+Shift+J\`
// sur Firefox : \`Ctrl+Shift+K\` et autorise le collage et tappant \`j\'autorise le collage\``)
// .addField("Etapes 3",
// `Colle ce code pour uppload en artwork
// \`\`\`document.getElementsByName("image_width")[0].value=1000;document.getElementsByName("image_height")[0].value=1;\`\`\`\
//
// Ou celui ci pour upload en screenshot MAIS PAS LES DEUX
// \`\`\`document.getElementsByName("image_width")[0].value=1000;document.getElementsByName("image_height")[0].value=1;document.getElementsByName("file_type")[0].value=5;\`\`\``)
// .addBlankField(true)
// .addField("Etapes 4",`Appui sur entre tu peu ferme la console. Remplie les champs titre tu certifie que c'est a toi et tu enregistre`);


bot.login(process.env.TOKEN)
