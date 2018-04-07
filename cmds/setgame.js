exports.run = (client, message, args) => {
    const games = args.slice(1, 3);
    client.user.setPresence({ game: { name: `${games}`, type: 2 } });

}
