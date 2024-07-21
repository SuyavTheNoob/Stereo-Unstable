const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Support server of this Bot'),
    async execute(interaction) {
        const supportServerLink = "https://discord.com/invite/PeEHBqJNbG";
        const youtubeLink = "";

        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
                name: 'Support Server',
                iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&',
                url: 'https://discord.com/invite/PeEHBqJNbG'
            })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1113800537402527903/1236803979996958740/11.png?ex=663956f7&is=66380577&hm=3b3c19a11adcb979517a133f2907f671305d23f1f5092cf7df043e6d5cab07bc&')
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};
