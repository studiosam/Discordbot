exports.run = (client, message, args) => {
    client.user.setActivity(args, { type: 'PLAYING' })
      .then(user => console.log(`new game `))
      .catch(console.error);
    console.log(client, args);
}
