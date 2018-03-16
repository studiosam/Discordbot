exports.run = (client, message, args) => {
    client.user.setActivity(args[0], { type: 'PLAYING' })
      .then(user => console.log(`new game `))
      .catch(console.error);
}
