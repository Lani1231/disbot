// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const { MessageEmbed } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

const rank = "Safe";
//Safe, Caution, Danger, Severe, Critical, Deadly, Deceased, Depart

const davidId = "801492725618704416";
const laniId = "549075114738581529";



const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Release of v1.00!')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'LaniBot™', iconURL: 'https://cdn.discordapp.com/attachments/969334492173066301/969372778102935582/Logo.png' })
	.setDescription('LaniBot™ is a new bot dedicated to protecting your (David W Greenhouse) account! This includes features that can be checked anytime, anywhere for more freedom and convinence!')
	.setThumbnail('https://cdn.discordapp.com/attachments/969334492173066301/969372778102935582/Logo.png')
	.setImage('https://cdn.discordapp.com/attachments/969334492173066301/969372778102935582/Logo.png')
	.setTimestamp()
	.addFields(
		{ name: 'Commands:', value: '/Account-Scan, /Deprecate, /Information, /SOS' },
	)
	.setFooter({ text: 'LaniBot™', iconURL: 'https://cdn.discordapp.com/attachments/969334492173066301/969372778102935582/Logo.png' });
	




client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'account-scan') {
		if (interaction.user.id === davidId){
			if (rank == "Safe"){
				await interaction.reply("Scan Shows: **Congrats!, your accounts is completely safe, nothing malicious was detected! (Safe)**");
			} else if (rank == "Caution"){
				await interaction.reply('Scan Shows: **Warning: your account has been detected to have malicious activity, although nothing too harmful, make sure others are alarmed! (Caution)**');
			} else if (rank == "Danger"){
				await interaction.reply('Scan Shows: **Attention: your account has been detected to have potentially dangerous activity on it and should be delt with fast! (Danger)**');
			} else if (rank == "Severe"){
				await interaction.reply('Scan Shows: **ATTENTION: your account needs IMEDIATE assistance in order to be recovered, warn <@857028378502758401> immediately! (Severe)**');
			} else if (rank == "Critical"){
				await interaction.reply('Scan Shows: **SERIOUS WARNING: your account was found to have EXTREMELY dangerous malwares/viruses/backdoors, most likely unrecoverable *<@857028378502758401>* (Critical)**');
			} else if (rank == "Deadly"){
				await interaction.reply('Scan Shows: **CRITICAL WARNING: account found with unrecoverable malwares/viruses/backdoors, get <@857028378502758401> and hope for the best (Deadly)**');
			} else if (rank == "Deceased"){
				await interaction.reply("Scan Shows: **EXTREME WARNING: your account is being hacked and possibly deleted or taken over which can not be recovered or reversed, make sure everything important is deleted or moved from the account (Deceased)**");
			} else if (rank == "Depart"){
				await interaction.reply("Scan Shows: **EXTREMELY SERIOUS WARNING: your account has history's most deadly malwares/viruses/backdoors, delete your cookies and browsing data, and make sure Discord is fully uninstalled, along with your Discord account before things get really out of hand (Depart)");
			}
		}

		await interaction.reply('The, "Account Scan" command is not available for you');

	} else if (commandName === 'inform') {
		if (!interaction.user.id === laniId){
			await interaction.reply('The, "Inform" command is not available for you');
			return
		}
		const user = await client.users.fetch(laniId);
		await user.send({ embeds: [exampleEmbed] });
		await interaction.reply("Successfully informed!")

	} else if (commandName === 'sos'){
		const user = await client.users.fetch('549075114738581529');
		const sender = await interaction.user
		await user.send("<@"+sender+">"+", sent a emergency message!");
		await interaction.reply("Successfully sent an SOS message to <@549075114738581529>!")

	} else if (commandName == 'deprecate'){
		if (!interaction.user.id === davidId){
			await interaction.reply('The, "Deprecate" command is not available for you')
			return
		}
		await interaction.reply("Deprecated user information!")

	} else if (commandName === "info"){
		await interaction.reply("LaniBot™ was designed for the pure intention of defending <@801492725618704416>'s account against the nasty side of Discord, which provides features to help against that!")
	}
});




// Login to Discord with your client's token
client.login(token);