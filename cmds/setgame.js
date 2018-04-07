exports.run = (client, message, args) => {
    const games = args.split(',').join(' ')slice(1, args.length);
    client.user.setPresence({ game: { name: `${games}`, type: 2 } });

}
