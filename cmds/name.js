exports.run = (client, message, args) => {
client.user.setUsername(args)
  .then(user => console.log(`My new username is ${user.username}`))
  .catch(console.error);
}
