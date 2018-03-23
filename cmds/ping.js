exports.run = (client, message, args) => {
    message.channel.send("pong!").catch(console.error).then(msg => msg.react("💩"));
    message.delete(3000);
}
