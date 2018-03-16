exports.run = (client, message, args) => {
    client.user.setGame(args);
    console.log(client, message, args);
}
