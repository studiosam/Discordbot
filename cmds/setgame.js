exports.run = (client, message, args) => {
    client.user.setPresence({ game: { name: `${args[1]}`, type: args[0] } });

}
