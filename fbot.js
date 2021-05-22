//This s the main file 
const Discord = require(`discord.js`);
const client = new Discord.Client();
const fs = require('fs');
client.cooldowns = new Discord.Collection();
const { prefix, token } = require('./config.json');
client.commands = new Discord.Collection();
const fetch = require("node-fetch")
const keep_alive = require('./keep_alive.js')

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.once(`ready`, ()=> 
  {  console.log(`Bot is online`)
  client.user.setUsername("Ouno");
  //client.user.setAvatar("");
  client.user.setPresence({ activity: { name: 'with discord.js' ,details:"Feel Free To Tap ?ouno",type :"PLAYING" } ,status:"online" })
  .then(console.log)
  .catch(console.error);  
  
  
});




client.on(`message`, async message=>{
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();
                                              
if (!client.commands.has(commandName)) return;

const command = client.commands.get(commandName);
                                         
try {
command.execute(message, args);
} catch (error) {
    console.log(error)
     message.channel.send(`We cannot execute this command`)
  }


});








client.login(token);
