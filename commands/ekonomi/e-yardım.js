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
    .addField(':small_red_triangle_down:',`\`${prefix}banka : Para Mikratınızı Ve İd Nizi Gösterir\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}günlük-para : Günlük Para (24 Saatte Bir Kullanılabilir)\``, true)
        .addField(':small_red_triangle_down:',`\`${prefix}dilen : Medine Dilencisi Olursunuz\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}hesap-aç : Banka Hesap Açar (+20 Lira Verir)\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}hesabımı-sil : Banka Hesabınızı Siler\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}hesap : Banka Hesabınız Hakkında Bilgi Verir\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}para-gönder : Belirttiğiniz Kişiye Belirttiğiniz Miktarda Para Gönderir\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}para : Bankadaki Paranızı Belirtir\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}market : Markteti Gösterir\``, true)
       .addField(':small_red_triangle_down:',`\`${prefix}slot : Slots Oynarsınız\``, true)
     .addField(':small_red_triangle_down:',`\`${prefix}yazıtura : Yazı Tura Oynarsınız\``, true)
    .addField(':small_red_triangle_down:',`**MESLEK**`,"`(market menüsünden alınır)`", true)
    .addField(':small_red_triangle_down:',`\`${prefix}Taxici : Taxici Olup Para Kazanırsınız Seviye(1)\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}Dolmuşcu : dolmuşcu Olup Para Kazanırsınız Seviye(2)\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}Aşcı : Aşcı Olup Para Kazanırsınız Seviye(3)\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}Kuyumcu : Kuyumcu Olup Para Kazanırsınız Seviye(4)\``, true)
    .addField(':small_red_triangle_down:',`**EŞYALAR**`,"`(market menüsünden alınır)`")
    .addField(':small_red_triangle_down:',`\`${prefix}Haydar : Haydarla Gasp Yaparsınız\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}Bıçak : Bıçakla Gasp Yaparsınız\``, true)
    .addField(':small_red_triangle_down:',`\`${prefix}Silah : Silahla Gasp Yaparsınız\``, true)

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