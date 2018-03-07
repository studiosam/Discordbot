exports.run = (client, message, args) => {

message.channel.send(":apple:***SONDAGE :apple:\n "+choix1+" ou "+""+choix2+"***")
            .then(function (message) {
              message.react("👍")
              message.react("👎")
              message.pin()
              message.delete()
            }).catch(function() {
              //Something
             });

}
