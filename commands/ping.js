const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
            .setName("ping")
            .setDescription("Responde com pong"),

    async execute(interaction) { // ephemeral faz o codigo aparecer só pra quem executa
        await interaction.reply({content:'Pong!', ephemeral: true })
    }
}