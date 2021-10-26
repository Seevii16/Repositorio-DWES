const got = require('got');
async function init() {
(async () => {
	try {
		const response = await got('https://sindresorhus.com');
		console.log(response.body);
		
	} catch (error) {
		console.log(error.response.body);
		
	}
})();
}
init();