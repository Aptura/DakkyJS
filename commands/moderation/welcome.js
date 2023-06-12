const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  description: 'Welcome',
  async execute(member) {
    const { user, guild } = member;
    const welcomeChannel = member.guild.channel.cache.get(
      "1070083254515929161"
    );
    const welcomeMessage = `Bienvenue <@${member.id}>, met toi à l'aise ! :fox:`;
    welcomeChannel.send({ content: welcomeMessage });
  },
};
