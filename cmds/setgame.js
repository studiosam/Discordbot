exports.run = (client, message, args) => {
    const games = args.slice(1, args.length);
    client.user.setPresence({ game: { name: `${games.split(',').join(' ')}`, type: 2 } });

}
