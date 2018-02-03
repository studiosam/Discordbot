module.exports.run = async (client) => {
      client.guild.channels.find("name", "general").send('hey');
}
