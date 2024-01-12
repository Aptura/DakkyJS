const { GuildMember } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  description: "Welcome",
  async execute(member) {
    const { user, guild } = member;
    const welcomeChannel = member.guild.channel.cache.get(
      "1070083254515929161"
    );
    const welcomeMessage = `Bienvenue <@${member.id}>, met toi à l'aise ! :hello:`;
    welcomeChannel.send({ content: welcomeMessage });
  },
};
