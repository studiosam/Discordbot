exports.run = (client, message, args) => {
    const games = args.slice(1, args.length).join(" ");
    const type = ["joue a", "en stream", "ecoute", "regarde"]
    message.channel.send(`${type[args[0]]} ${games}`);
    client.user.setPresence({ game: { name: `${games}`,type: '2' }, afk: false, since: 0 })
    .then(console.log)
    .catch(console.error);


}
