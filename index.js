const Discord = require('discord.js');
const Sequelize = require('sequelize');
const client = new Discord.Client({autoReconnect: true});

const fs = require("fs");

const sequelize = new Sequelize('process.env.DATABASE_URL', {

}

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.login(process.env.TOKEN)
