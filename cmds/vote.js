exports.run = (client, message, args) => {

message.channel.send(":apple:")
            .then(function (message) {
              message.react("👍")
              message.react("👎")
              message.delete(1000)
            }).catch(function() {
              //Something
             });

}
