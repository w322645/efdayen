const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message) => {

  if(!message.guild){
    var prefix = "?";
  } else {
  var prefix = db.fetch(`prefix_${message.guild.id}`);
  if (!prefix) {
    var prefix = "?";
  }
  };
    const y = new Discord.MessageEmbed()
    .setAuthor('EFDA BASİT EKONOMİ')
.setColor("#36393f")
    .addField(`BANKA`,`\`${prefix}banka : Para Mikratınızı Ve İd Nizi Gösterir\``, true)
    .addField(`GÜNLÜK PARA`,`\`${prefix}günlük-para : Günlük Para (24 Saatte Bir Kullanılabilir)\``, true)
        .addField(`DİLEN`,`\`${prefix}dilen : Medine Dilencisi Olursunuz\``, true)
    .addField(`HESAP KUR`,`\`${prefix}hesap-aç : Banka Hesap Açar (+20 Lira Verir)\``, true)
    .addField(`HESABI SİL`,`\`${prefix}hesabımı-sil : Banka Hesabınızı Siler\``, true)
    .addField(`HESABINA BAK`,`\`${prefix}hesap : Banka Hesabınız Hakkında Bilgi Verir\``, true)
    .addField(`PARA TRANSFER`,`\`${prefix}para-gönder : Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir\``, true)
    .addField(`PARANIZ`,`\`${prefix}para : Bankadaki Paranızı Belirtir\``, true)
    .addField(`MARKET`,`\`${prefix}market : Markteti Gösterir\``, true)
       .addField(`SLOT`,`\`${prefix}slot : Slots Oynarsınız\``, true)
     .addField(`YAZITURA`,`\`${prefix}yazıtura : Yazı Tura Oynarsınız\``, true)
    .addField(`**MESLEK**`,'----------------------------------------------------------------------------------')
    .addField(`TAXİCİ`,`\`${prefix}Taxici : Taxici Olup Para Kazanırsınız Seviye(1)\``, true)
    .addField(`DOLMUŞCU`,`\`${prefix}Dolmuşcu : dolmuşcu Olup Para Kazanırsınız Seviye(2)\``, true)
    .addField(`AŞÇI`,`\`${prefix}Aşcı : Aşcı Olup Para Kazanırsınız Seviye(3)\``, true)
    .addField(`KUYUMCU`,`\`${prefix}Kuyumcu : Kuyumcu Olup Para Kazanırsınız Seviye(4)\``, true)
    .addField(`**EŞYALAR**`,'----------------------------------------------------------------------------------')
    .addField(`HAYDAR`,`\`${prefix}Haydar : Haydarla Gasp Yaparsınız\``, true)
    .addField(`BIÇAK`,`\`${prefix}Bıçak : Bıçakla Gasp Yaparsınız\``, true)
    .addField(`SİLAH`,`\`${prefix}Silah : Silahla Gasp Yaparsınız\``, true)

    .setFooter(`${client.user.username}`, client.user.avatarURL)
    .setThumbnail('https://cdn.glitch.com/478cc1e8-9c56-49a4-b910-3247fb1894aa%2Fezgif.com-gif-maker-6c3ab6491a5e480d7.gif?v=1621708715117') 
    return message.channel.send(y)
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'e-yardım'
};