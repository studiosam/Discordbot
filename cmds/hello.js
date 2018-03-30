exports.run = (client, message, args) => {
    message.channel.send(`World ${guild.memberCount}`).then(msg => msg.react("💩"));
    message.delete(100);
}
