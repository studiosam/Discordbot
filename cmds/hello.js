exports.run = (client, message, args) => {
    message.channel.send('```World ! ```').then(msg => msg.react("🗑"));
    message.delete(100);
}
