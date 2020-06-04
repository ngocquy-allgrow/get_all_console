const PuppeteerClass = require('../../library/Puppeteer');
const ConsoleRequest = require('../request/ConsoleRequest');
// const stringifyObject = require('stringify-object');

class TranslateController {

    async index(request, response) {
        let url = request.body.url;
        let dataValidate = (new ConsoleRequest()).validate(url);

        if (Object.keys(dataValidate).length > 0)  {
            return response.status(401).send({
                sucess: false,
                data: dataValidate,
            });
        } else {
            var puppeteer = new PuppeteerClass;
            await puppeteer.settingRequest();

            let gotoRes = await puppeteer.goToURL(url);

            if (gotoRes.status == 'error') {
                if (gotoRes.message.indexOf('ERR_INTERNET_DISCONNECTED') != -1) {
                    return response.status(500).send({
                        sucess: false,
                        data: 'No network connection',
                    });
                }

            	 return response.status(500).send({
                    sucess: false,
                    data: gotoRes.message,
                });
            }

            return response.status(200).send({
                sucess: true,
                data: puppeteer.console,
            });
            
        }
    }
}

module.exports = TranslateController;