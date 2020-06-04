const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express()
require('dotenv').config()
require('express-router-group');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser')
 
global.Router = router;
global.fs = fs;
global.path = path;

// start router the first and goto url google.com
// (async() => {
	
// 	await that.settingRequest();
// 	let cronMessage = await that.goToCronMessage();
// 	let checkUrl = await that.page.evaluate(() => location.href);
	
// 	if (checkUrl != process.env.URL_CRON_MESSAGE) {
// 		that.closePage();
// 		await that.settingRequest();
// 		cronMessage = await that.goToCronMessage();
// 	}
// 	if (cronMessage.status == 'error'
// 		&& cronMessage.message.indexOf('ERR_INTERNET_DISCONNECTED') != -1) {
// 		console.log('The network has experienced a problem');
// 		process.exit(1);
// 	}
// 	// if (cronMessage.status == 'error') {
// 	// 	console.log('There was an error opening google! Please try it again. '+ cronMessage.message);
// 	// 	process.exit(1);
// 	// }
// })();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// include router
const routers = require('./routers/router');
app.use('/', routers);

// Create an HTTP service.
const PORT = process.env.PORT || 3000;
http.createServer(app).listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`);
});
