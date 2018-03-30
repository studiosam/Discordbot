exports.run = (client, message, args) => {
    message.channel.send("pong!").then(msg => msg.react("🗑"));
    message.delete(3000);
}
