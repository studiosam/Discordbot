exports.run = (client, message, args) => {
    client.user.setPresence({ game: { name: `${args}`, type: 2 } });

}
