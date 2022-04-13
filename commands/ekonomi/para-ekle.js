const Discord = require('discord.js');
const ayarlar = require('../../config');
const db = require('quick.db');
const ms = require('ms')
exports.run = async (client, message, args) => {
let kişi = message.mentions.users.first() || message.author

var AGA = args[1]

let parapara =  db.add(`para_${kişi.id}`, AGA) || 0  


const mesajks = new Discord.MessageEmbed()
.setDescription(`Ana Panelden ${kişi} Kişisine 💸${AGA} Miktar Para Eklendi Sahibim.`)
.setColor('GREEN')
message.channel.send(mesajks)




};
exports.conf = {
  aliases: ['paraekle','para-ver'],
  permLevel: 4
};

exports.help = {
  name: 'para-ekle'
};