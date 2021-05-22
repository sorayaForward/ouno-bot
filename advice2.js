//this doesnt work cause the API is private and not public 


const fetch = require("node-fetch");
module.exports = {
    name: 'advice',
    description: 'advice nutrition command',
    cooldown: 5,// the user have to wait 5s before resending the same command
    async execute( message, args) {
    
        fetch("https://webknox-recipes.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%3F", {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "386a7fe7b5msh53bf307c03dadb5p1b33e4jsn4dc6739b9e6c",
            "x-rapidapi-host": "webknox-recipes.p.rapidapi.com"}}).then(response => {
console.log(response);
message.channel.send(response);

}).catch(error=> {console.log(error); })
   }   }