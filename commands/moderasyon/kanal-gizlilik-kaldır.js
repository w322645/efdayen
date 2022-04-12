const discord = require('discord.js'); //modüller

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
return message.channel.send("Bu komutu kullanabilmek için **Kanalları Yönet**yetkisine sahip olmalısın");
message.channel.send("Kanal Üyelere Görünür Hale Getirildi.")
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
  message.channel.createOverwrite(every, {
    VIEW_CHANNEL: true
  });
}
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: false, //dmde kullanıma açık mı değil mi
    aliases: ['kanal-görünürlük-aç'], //kısayollar
    permLevel: 3 //perm level mainde karşıliklar yazar
  };
 
  exports.help = {
    name: "kanal-göster", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  }; 