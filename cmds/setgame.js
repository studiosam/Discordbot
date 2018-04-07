exports.run = (client, message, args) => {
    client.user.setPresence({ game: { name: `${args.slice(1,10)}`, type: 2 } });

}
