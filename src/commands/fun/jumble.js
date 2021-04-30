// requires jumble-words and discord.js
const Discord = require("discord.js")
const Jumble = require('jumble-words');

module.exports = {
  name: 'jumble',
  
 run: async(client, message, args) => {
    const jumble = new Jumble();
    const word = jumble.generate();
        const filter = m => m.author.id === message.author.id;

        await message.reply(`your word is **${word[0].jumble}**!`);

        message.channel.awaitMessages(filter, {
            max: 1,
            error: ["time"],
            time: 15000
        })
        .then(collected => {
            const m = collected.first();
            if (m.content.toLowerCase() != word[0].word.toLowerCase()) return message.reply(`your choice is incorrect!. correct word was **${word[0].word}**!`);
            return message.reply(`correct guess! the word was **${word[0].word}**`);

        })
        .catch(() => {
            message.reply(`you didn't answer in time. the correct word was **${word[0].word}**!`);


        })

    }
} 
