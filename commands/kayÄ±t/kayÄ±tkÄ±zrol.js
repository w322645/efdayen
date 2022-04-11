const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
var rol = message.mentions.roles.first();
if(!rol) return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`:warning: Bir rol belirtin!`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
qdb.set(`kızrolü_${message.guild.id}`, rol.id)
return message.channel.send(
    new Discord.MessageEmbed()
    .setColor('#36393f')
    .setAuthor(`${client.user.username} Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
    .setDescription(`:white_check_mark: Kız Rol'ü <@&${rol.id}> olarak ayarlandı!`)
    .setFooter(`${message.author.tag} istedi.`, message.author.displayAvatarURL({dynamic: true}))
    )
};
exports.conf = {
    aliases: ['kızrol'],
    permLevel: 3
};
exports.help = {
    name: "kız-rol"
}