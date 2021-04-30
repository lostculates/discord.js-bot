const Discord = require("discord.js")


module.exports = {
  name : "truth",
  description : "You will never reach the truth",  // JoJo reference go brrr

  run: async (client , message , args) => {
   const sentence = args.join("+")
       let sntnce = message.content.split(' ');
    sntnce.shift();
    sntnce = sntnce.join(' ');
    if (!sentence) return message.reply('please specify a query.', { allowedMentions: { repliedUser: false } });
    let embed = new Discord.MessageEmbed()
      .setTitle('the scroll of truth') 
      .setImage(`https://api.devs-hub.xyz/truth?text=${sentence}`)
      .setColor('BLACK')
      .setFooter(' ');
    message.channel.send(embed)
  }
  }
