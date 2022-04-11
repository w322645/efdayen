const Discord = require("discord.js");
const instagram = require("user-instagram");
exports.run = (client, message, args) => {

  message.channel.messages.fetch(args.slice(0).join(" ")).then(dest=>{
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("Mesaj")
    .setDescription(`Mesaj sahibi : ${dest.author}\nMesaj içeriği : ${dest.content}`))
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
    kategori: 'kullanıcı',
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "ets",
  description: "Belirlenen Instagram Hesaplarinin bilgilerini verir!",
  usage: "instagram <instagram-ismi>"
};