exports.run = (client, message, args) => {
    client.user.setPresence({ game: { name: `${args[0]}`, type: 2 } });

}
