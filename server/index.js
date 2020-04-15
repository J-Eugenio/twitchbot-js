const tmi = require('tmi.js')

//Nome na twitch
const user_name = "" 
//Oauth - Chave para o bot se conectar 
//Pode ser pega em - https://twitchapps.com/tmi/
const oauth = ""
//Canal que o bot ira se conectar
const canal_twitch = ['']

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: "aws",
        reconnect: true,
    },
    identity: {
        username: user_name,
        password: oauth,
    },
    channels: [...canal_twitch]
}

const client = new tmi.client(options)

client.connect()
//Parametro "connected" - Evento e executado assim que loga no canal
client.on('connected', (address, port) =>{
    client.action("canal_twitch", "Olá, bot está conectado")
})

//Parametro "chat" - Captura oque e digitado no chat
//e guarda em message, assim pode-se congifurar comandos
client.on("chat", function (channel, user, message, self) {
    if (message === "Ola") {
        client.action("canal_twitch", user["display-name"] + " seja bem vindo!")
    }
})

