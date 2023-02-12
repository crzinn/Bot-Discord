const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
            .setName("github")
            .setDescription("Responde com meu repositório"),

    async execute(interaction) {
        await interaction.reply('https://github.com/crzinn/')
    }
}