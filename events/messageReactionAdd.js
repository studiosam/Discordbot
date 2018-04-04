exports.run = (client, reaction) => {
  if(reaction.emoji.name === "🗑" && reaction.count >= 2 ) {
      reaction.message.delete(10)
  }
}
