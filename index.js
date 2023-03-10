const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')
//dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILDE_ID } = process.env

//importação dos comandos
const fs = require('node:fs')
const path = require('node:path')
//pega o caminho da pasta commands e seta na variavel commandsPath
const commandsPath = path.join(__dirname, 'commands')
//lê o commandsPath e filtra todos os arquivos terminados em .js e seta na variavel commandsFiles em formato de array
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()
// pega todos os arquivos da pasta commands e coloca em 'file'
for (const file of commandFiles){
    //filePath recebe o caminho da pasta commands + o nome dos arquivos 'file'
    const filePath = path.join(commandsPath, file)
    //command recebe todas as funções de todos os comandos na pasta commands
    const command = require(filePath)
    
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command)
    } else{
        console.log(`Esse comando em ${filePath} está com 'data' ou 'execute' ausente.`)
    }
}

// loggin do bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}`)
})
client.login(TOKEN)

//Listener de interações com o bot

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        if (selected == "javascript"){
            await interaction.reply("Documentação do Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript")
        } else if (selected == "python"){
            await interaction.reply("Documentação do Python: https://www.python.org")
        } else if (selected == "csharp"){
            await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/")
        } else if (selected == "discordjs"){
            await interaction.reply("Documentação do Discord.js: https://discordjs.guide/#before-you-begin")
        } 
    }

    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error('comando não encontrado')
        return
    }

    try {
        await command.execute(interaction)
    } catch(error) {
        console.error(error)
        await interaction.reply('ouve um erro ao executar esse comando')
    }
})