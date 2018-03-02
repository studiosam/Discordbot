exports.run = (client, message, args) => {
client.user.setUsername(args[0])
  .then(user => console.log(`My new username is ${user.username}`))
  .catch(console.error);
}
