const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("mostra playlist de musica que o arthur gosta"),

    async execute(interaction) {
        await interaction.reply('https://open.spotify.com/playlist/6doQ1Nav7EzJvYOiVgfjAv?si=504c86a8bd4d47d6')
    }
}