exports.run = (client, message, args) => {
    client.user.setGame(args[0])
      .then(user => console.log(`new game is ${user.game}`))
      .catch(console.error);
    console.log(client, args);
}
