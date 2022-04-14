const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, args) => {
    let sebep = args.join(" ")

 db.set(`sahıp_${message.author.id}`, sebep)

const sahhl = new Discord.MessageEmbed()
.setDescription(`Durumunuz \`${sebep}\` Olarak Belirlenmiştir Sahibim`)
.setColor('BLACK')


message.channel.send(sahhl)
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  }
  
  exports.help = {
    name: 'sahip-durum',
    description: "",
    usage: ''
  }