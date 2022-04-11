const Discord = require('discord.js');
const qdb = require('quick.db');

exports.run = async(client, message, args) => {
      var e = qdb.fetch(`prefix_${message.guild.id}`)
  if(e){
    var p = e
  }
  if(!e){
    var p = "?"
  }
var yetkili = qdb.fetch(`kayıtyetkilisi_${message.guild.id}`)
var yetkilick = message.guild.roles.cache.get(yetkili)
if(!yetkilick) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Kayıt yetkilisi rol'ü ayarlanmamış! Ayarlamak için \`${p}kayıt-yetkili\``)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
if(!message.member.roles.cache.has(yetkilick.id)) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Bu komutu kullanmak için <@&${yetkilick.id}> rolüne sahip olmalısın!`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
var rol = qdb.fetch(`erkekrolü_${message.guild.id}`)
var rolcük = message.guild.roles.cache.get(rol)
if(!rolcük) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Erkek rol'ü ayarlanmamış! Ayarlamak için \`${p}erkek-rol\``)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
var al = qdb.fetch(`alınacakrol_${message.guild.id}`)
var alck = message.guild.roles.cache.get(al)
if(!alck) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Alınacak rol ayarlanmamış! Ayarlamak için \`${p}alınacak-rol\``)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
var kanal = qdb.fetch(`kayıtkanalı_${message.guild.id}`)
var kanalcık = message.guild.channels.cache.get(kanal)
if(!kanalcık) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Kayıt kanal'ı ayarlanmamış! Ayarlamak için \`${p}kayıt-kanal\``)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
if(message.channel.id !== kanalcık.id) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Bu komut sadece <#${kanalcık.id}> kanalında kullanılabilir!`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
var log = qdb.fetch(`kayıtlog_${message.guild.id}`)
var logcuk = message.guild.channels.cache.get(log)
if(!logcuk) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Kayıt log'u ayarlanmamış! Ayarlamak için \`${p}kayıt-log\``)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
var yaş = args[2]
var user = message.mentions.members.first();
if(!user) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Kimi kayıt edeceğimi belirtmelisin.`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
var isim = args[1]
if(!yaş) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Bir yaş belirtin!`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
if(isNaN(yaş)) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Yaş'da harf bulunamaz.`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
if(!isim) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`Bir isim belirtin!`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
    var tag = qdb.fetch(`kayıttag_${message.guild.id}`)
if(!tag){
    var tag = ""
}
user.roles.remove(alck.id)
user.roles.add(rolcük.id)
user.setNickname(`${tag} ${isim} | ${yaş}`)
qdb.add(`kayıt_${message.author.id}`, 1)
var toplam = qdb.fetch(`kayıt_${message.author.id}`)
const embed = new Discord.MessageEmbed()
.setColor('#36393f')
.setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`
<a:3281_sharingan:814532953479708733> Kayıt edilen kişi: \`${user.user.tag}\`

<a:bit:820592893264920578> Kayıt eden yetkili: ${message.author}

<a:krmzyldz:820592911686041612> Yeni adı: \`${tag} ${isim} | ${yaş}\`

<a:YklenmeGif:820284536797265961> Yetkili kayıt toplamı: \`${toplam}\`
    `)
.setFooter(`${message.author.tag} kayıt etti.`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
logcuk.send(embed)
kanalcık.send(embed)
};
exports.conf = {
    aliases: ['e'],
    permLevel: 0
};
exports.help = {
    name: "erkek"
}