const { Client, Collection, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

// Chargement des commandes
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

// Chargement des événements
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.login(process.env.TOKEN);
