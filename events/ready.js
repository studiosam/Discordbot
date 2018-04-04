exports.run = (client) => {
  console.log('pret ! hhm');
  client.user.setActivity({game: {name: "la lune", type: 3}});
}
