exports.run = (client, message, args) => {
    const games = args.slice(1, args.length);
    const status = games.split(',').join(' ');
    message.channel.send(status);
    client.user.setPresence({ game: { name: `${status}`, type: 2 } });

}
