exports.run = (client, message, args) => {
    client.user.setActivity(args[0], { type: 'PLAYING' });

}