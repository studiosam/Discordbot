exports.run = (client, message, args) => {
  if (client.id == 202055354861748225) {
client.user.setUsername(args[0])
  .then(user => console.log(`My new username is ${user.username}`))
  .catch(console.error);
}
}
