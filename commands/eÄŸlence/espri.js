const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("EFDA | Espri yükleniyor.").then(message => {

    var matador = [
 
      "Seni görünce; \ngözlerim dolar, \nkulaklarım euro.",
      "Kar üzerinde yürüyen adama ne denir. Karabasan.",
      "Yıkanan Ton’a ne denir? Washington!",
      "Gidenin arkasına bakmayın yoksa geleni göremezsiniz.",
      "+Oğlum canlılara örnek ver. \n-Kedi, köpek. \n+Cansızlara örnek ver. \n-Ölü kedi, ölü köpek.",
      "+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!",
      "+Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.",
      "+Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.",
      "+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.",
      "Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.",
      "+Acıkan var mı ya? \n-Yok bizde tatlı kan var.",
      "Yılanlardan korkma, yılmayanlardan kork.",
      "+Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.",
      "Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.",
      "Aaa siz çok terlemişsiniz durun size terlik getireyim.",
      "Aklımı kaçırdım, 100.000 TL fidye istiyorum.",
      "-Adam'a Nasil Selam Verilir ? \n+Saman",
      "-Adın Ne ? \n-Nimet \n-Dalga gecmicekmisin ? \n\n+Hayir Nimetle Dalga Gecilmez",
      "+ hulk otobüse binerse ne olur\n- ne olur \n+ halk otobüsü",
      "Adamın Biri Donmuș Karısı Atlet",
      "-Adamın Biri Mahkemenin Önünden Geçerken Çatal ve Kaşık sesleri duymuş neden ?\n+Çünkü mahkemede sanığın hakkını yiyolarmış",
      "-Uçan Köpeğe Ne Denir ?\n+Havuç",
      "-Bacaktaki 10’a ne denir?\n+PANTALON",
      "-En güzel yemek yapan Ceren hangisidir?\n\n+TENCEREN",
      "-İshal olmuş böceğe ne denir?\n\n+CIRCIR BÖCEĞİ"
      

    ];

    var matador = matador[Math.floor(Math.random() * matador.length)];

    message.edit(`${matador}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["espiri", "espri-yap", "yap-espri", "yapbi-espri"],
  permLevel: 0
};

exports.help = {
  name: "espri",
  description: "Espri yapar.",
  usage: "espri"
};