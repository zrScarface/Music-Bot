const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');

global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ],
   disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');
const express = require('express')
const app = express();
const port = 2000

app.get('/', (req, res) => res.send('Odd is better.'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
client.login("MTAwNTg4MzYxNDg4NzY5MDI2MA.GK70dc.9quEbY0jGkb7hxhDNBiLnK-tY1klcFo3FiRPE0");