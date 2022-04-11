const Discord = require("discord.js");
const db = require("quick.db");
  const talkedRecently = new Set();
exports.run = async (client, message, args) => {

const nero = new Discord.MessageEmbed()
.setDescription('NERO AŞKO I LOVE YOU')
.setImage('https://images-ext-2.discordapp.net/external/8LuZMe0Fxq94ipoJiCCbNlzzu6s834Rq-9KU7TOKGxc/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/335050947858530314/ff274929c0de68a6b01714055533a689.webp?width=512&height=512')
.setTitle('NERO CANDIR GERİSİ YALANDIR')
.addField('W32 SEVENLER','W32 İYİ BİR İNSAN LABALİ DEĞİL', true)
.addField('NERO SEVENLER','NERO İYİ BİR İNSAN LABALİ DEĞİL', true)

message.channel.send(nero)

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: "nero"
};
