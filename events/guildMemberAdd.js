exports.run = (client, member) => {
const guild = member.guild;
 const defaultChannel = guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
  defaultChannel.send(`yo ${member}`,{embed: {
    "description": `${member} bienvenue sur ${guild.name} tu est le ${guild.memberCount} a rejoindre`,
   "color": 1413051,
    "image": {
      "url": "https://i.imgur.com/Z3qbHT0.gif"
    }
  }}).then(msg => msg.delete(10000));
}
