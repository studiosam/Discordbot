exports.run = (client, message, args) => {
  client.setNickname({nick: message.content.replace(args[0], '')}).catch(console.error(););
/*lient.user.setUsername(args[0])
  .then(user => console.log(`My new username is ${user.username}`))
  .catch(console.error);*/
}
