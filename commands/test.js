const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Répond avec Test réussi!'),
    async execute(interaction) {
        await interaction.reply('Test réussi!');
    }
};
