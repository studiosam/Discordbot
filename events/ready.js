exports.run = (client) => {
  console.log('pret ! hhm');
  client.user.setPresence({ game: { name: 'rien', type: 2 } });
}
