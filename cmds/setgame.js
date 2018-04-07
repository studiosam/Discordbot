exports.run = (client, message, args) => {
    const games = args.slice(1, args.length).join(" ");
    message.channel.send(`Jeux defini sur : ${games}`);
    client.user.setPresence({ game: { name: `${games}`, type: 2 } });

}
