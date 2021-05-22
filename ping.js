//module.exports is how you export data in Node.js so that you can require() it in other files. 
module.exports = {
	name: 'ping',
	description: 'Ping command',
	cooldown: 5,// the user have to wait 5s before resending the same command
	execute(message, args) {
		message.channel.send('Pong.');
	},
};