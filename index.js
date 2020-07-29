const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

const senha = 'censured kkk';

bot.login(senha)
bot.on('ready',  () => {
    console.log('O bot está online!')
});

bot.on('message', async msg => {

    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;

    const args = msg.content.trim();
    const cmd = args.toLowerCase();


    if(cmd === 'bom dia') {
        await msg.channel.send('Bom dia delícia :grin:') // Comando de bom dia
    }

    if(cmd === 'eduardo') {
        await msg.channel.send('**E D U A R D O** https://cdn.discordapp.com/attachments/497062752473317397/736651644468723842/eduardo_1.mp4') // Comando do eduardo 😁
    } 
    if(cmd === 'pombo') {
        await msg.channel.send('**P O M B O** https://cdn.discordapp.com/attachments/700141839650521200/738030478019395664/18eb8df1163687a74db49b81dda130b4c96b66884f9738deaebf2c2fac845235_1.mp4') // Comando do pombo 😁
    }

    switch(cmd) {
        case '!safadensa':
            await msg.reply('```BEM-VINDO A MAIOR LOJA DE SAFADENSA DO BRASIL!\n\ Aqui estão suas escolhas:\n\ 1- Porn\n\ 2- Hentai\n\ 3- Furry (Acesso somente para o Zarakiando)\n\  AVISO! Não nos responsabilizamos pelo seu pedido!```')
            bot.on('message', resp => {
                if(resp.author.id === msg.author.id && resp.channel.id !== msg.channel.id); {
                    switch(resp.content.trim()) {
                        case '1':
                            msg.channel.send('Teste 1')
                            break

                        case '2':
                            msg.channel.send('Teste 2')
                            break

                        case '3':
                            msg.channel.send('Teste 3')
                            break
                        }
                    }
                }
            )
        break
    }
})
