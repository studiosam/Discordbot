exports.run = (client, message, args) => {
    client.user.setPresence({ game: { name: 'some name', type: 0 } });

}
