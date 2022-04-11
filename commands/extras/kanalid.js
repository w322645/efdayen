const discord = require("discord.js");
exports.run = async (client, message, args) => {
  let enginar = message.mentions.channels.first();
  if (!enginar) return message.channel.send("kanal belirt!");
  return message.channel.send(`Etiketlenen kanalın idi: ${enginar.id}`);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kanalid"],
  permLevel: 2
};

exports.help = {
  name: "kanal-id",
  description: "dil",
  usage: "dil"
};
