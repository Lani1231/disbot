const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('account-scan').setDescription('Scans account for potential malwares/viruses/backdoors!'),
	new SlashCommandBuilder().setName('info').setDescription('Replies with information regarding the bot!'),
	new SlashCommandBuilder().setName('sos').setDescription('Sends an emergency signal to <@857028378502758401>, recommended when hacker issue!'),
    new SlashCommandBuilder().setName('deprecate').setDescription('Mixes information to confuse hackers, recommended daily!'),
    new SlashCommandBuilder().setName('inform').setDescription('Informs users regarding the bot (LANI ONLY / TESTING)!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

    //node deploy-commands.js