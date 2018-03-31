exports.run = (reaction, user, guild) => {
if(reaction.emoji.name === "🗑" && reaction.count >= 2 ) {
    reaction.message.delete(10)
}
}
