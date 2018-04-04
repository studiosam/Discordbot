exports.run = (client, message, args) => {
    client.user.setActivity(`args[1]`, { type: `args[0]` });

}
