const Discord = require("discord.js");
const axios = require('axios');

exports.run = async (client, message, args) => {
    const city = args[0];
    if (!city) return message.channel.send('Şehir adı girmelisiniz.');
    axios.get(`https://api.collectapi.com/pray/single?ezan=Ak%C5%9Fam&data.city=${city.toLowerCase()}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 0m0xUjMVjesqShG4z4W4UV:2R4cNsmr9fHjM0hqldYmCu"
        }
    }).then(res => {
        const messageEmbed = new Discord.MessageEmbed().setTitle('EFDA ORUÇ TUTUYOR').setColor('YELLOW').setImage('https://cdn.pixabay.com/photo/2019/07/15/09/17/mosque-4338926_1280.png').setDescription(`
           > **${city}** şehri için iftar saati **${res.data.result[0].time}.**
           \`\`\`Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\`
        `);

        message.channel.send(messageEmbed);
    }).catch(err => {
        message.channel.send('Bir sorun ortaya çıktı. Komudu doğru kullandığınızdan emin olun.');
        console.log(err);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ramazan'],
    permLevel: 0
};

exports.help = {
    name: "iftar"
};