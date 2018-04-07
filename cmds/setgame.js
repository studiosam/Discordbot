exports.run = (client, message, args) => {
    const games = args.slice(1, args.length);
    game = game.split(',').join(' ');
    client.user.setPresence({ game: { name: `${games}`, type: 2 } });

}
