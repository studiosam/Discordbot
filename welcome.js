module.exports.run = async (client, channels) => {
      client.guild.channels.find("name", "general").send('hey');
}
