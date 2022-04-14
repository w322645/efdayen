const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, args) => {


let sahip = db.delete(`sahıp_${message.author.id}`)

const sahhl = new Discord.MessageEmbed()
.setDescription(`Durumunuz Silindi`)
.setColor('BLACK')


message.channel.send(sahip)
    
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 4
  }
  
  exports.help = {
    name: 'sahip-durumsil',
    description: "",
    usage: ''
  }