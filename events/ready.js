exports.run = (client) => {
  console.log('pret ! hhm');
  client.user.setPresence({
     game: {
       name: 'les pro',
       type: 3
     });
}
