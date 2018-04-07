exports.run = (client, message, args) => {
    const games = args.slice(1, args.length);
    const status = games.split(',').join(' ');
    message.channel.send(games);
    client.user.setPresence({ game: { name: `${status}`, type: 2 } });

}
