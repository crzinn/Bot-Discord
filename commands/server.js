const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('informações sobre o server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`esse servidor é "${interaction.guild.name}" e tem ${interaction.guild.memberCount} membros.`);
	},
};