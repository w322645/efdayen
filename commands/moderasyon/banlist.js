const hastebin = require('hastebin-gen');
const Discord = require('discord.js');

exports.run = (client, msg, args) => {

  
  let guild = msg.channel.guild

    const bans = new Map();
    msg.guild.fetchBans().then(g => {
      bans[g.id] = g;
      let banlist = `${bans[g.id]
        .map(ge => `\n (${ge.user.tag}) (${ge.user.id})`)
        .join("\n")}`;


	    let haste = (`${guild.name}\n\n\n` + banlist || `Sunucuda Banlanan Üye Bulunamadı`)
        let type = (bans)

        hastebin(haste, type).then(r => {
            var link = `${r}`
            msg.channel.send(new Discord.MessageEmbed()
            .setColor('BLACK')
            .setImage('https://2.bp.blogspot.com/-F912aH8xass/W6dX7tiSKXI/AAAAAAAAABc/ULYyfAaGSZYUibjoL2-LFmWcobyYipQqwCLcBGAs/s1600/banned-stamp-png.png')
            .setDescription(`Aşağıdaki Linkten Banlayanlara Bakabilirsiniz \n\n\n[${guild.name} Banlanan Üyeler](${link})`));
        }).catch(console.error);

    });

    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'banlist',
  description: 'Hastebin çevirir.',
  usage: 'hastebin [komut]'
};