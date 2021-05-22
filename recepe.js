//this doesnt work cause the API is private and not public 
const fetch = require("node-fetch")

module.exports = {
		name: 'recepe',
		description: 'healthy recepes.',
		execute(message) {
			
				
async function postData(url = '', data = {}) {
	
	const response = await fetch(url, {
		"method": "GET",
		"headers": {
		"x-rapidapi-key": "386a7fe7b5msh53bf307c03dadb5p1b33e4jsn4dc6739b9e6c",
		"x-rapidapi-host": "webknox-recipes.p.rapidapi.com"
	  },
	  
	
	 
	});
	return response.json(); 
  }
  
  postData(`https://webknox-recipes.p.rapidapi.com/recipes/quickAnswer?q=How%20much%20vitamin%20c%20is%20in%202%20apples%3F`, 
	 { answer: 42 })
	.then(data => {
	  console.log(data); 
	});
			}}