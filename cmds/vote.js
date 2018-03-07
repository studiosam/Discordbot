exports.run = (client, message, args) => {

message.channel.send(":apple:")
            .then(function (message) {
              message.react("👍")
              message.react("👎")
              message.pin()
              message.delete()
            }).catch(function() {
              //Something
             });

}
