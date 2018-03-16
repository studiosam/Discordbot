exports.run = (client, message, args) => {
    client.user.setGame(args[0]);
    console.log(client, args);
}
