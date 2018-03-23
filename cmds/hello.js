exports.run = (client, message, args) => {
    message.channel.send('```World ! ```').then(msg => msg.delete(1000));
    message.delete(100);
}
