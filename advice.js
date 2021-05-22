const fetch = require("node-fetch")
module.exports = {
	name: 'advice1',
	description: 'advice command',
	cooldown: 5,// the user have to wait 5s before resending the same command
	 execute( message) {
		client.on('message', async message => {
			// ...
			if (command === 'advice') {
				const { file } = await fetch('bd3e4c3fdeab9cd24028ad4cb3e0cc61	').then(response => response.json());
				message.channel.send(file);
			}
		});
	},
};
