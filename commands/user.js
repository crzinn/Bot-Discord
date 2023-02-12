const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Dá informações sobre o usuário.'),
	async execute(interaction) {
		await interaction.reply(`Esse comando foi rodado por ${interaction.user.username}, que entrou em ${interaction.member.joinAt}.`);
	},
};