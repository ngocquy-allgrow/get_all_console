const puppeteer = require('puppeteer');
const random_useragent = require('random-useragent');
const chalk = require('chalk')

module.exports = class Puppeteer {

    constructor() {
        this.console = [];
    }

    async settingRequest() {
        this.browser = await puppeteer.launch({headless: true,
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            // '--single-process'
          ],
        });
        this.page = await this.browser.newPage();
       
        // Close poppup
        this.page.on('dialog', async dialog => {
            await dialog.dismiss();
        });
        await this.page.setRequestInterception(true);


        this.page.on('console', async (message) => {
            const type = await message.type().substr(0, 3).toUpperCase()
            
            const colors = {
                LOG: text => text,
                ERR: chalk.red,
                WAR: chalk.yellow,
                INF: chalk.cyan
            }
            if (['ERR', 'WAR', 'INF'].indexOf(type) !== -1) {
                this.console.push({[type] : message.text()});
            }
            
            const color = colors[type] || chalk.blue
            console.log(color(`${type} ${message.text()}`))
        })

        this.page.on("request", async(request) => {
            if ([].indexOf() !== -1) {
                await request.abort();
            } else {
                await request.continue();
            }
        });
    }

    async goToURL(url) {
        let object = {
            status: 'success',
            message: ''
        }

        try {
            this.page.setUserAgent(random_useragent.getRandom());
            object.message = await this.page.goto(url, {
                waitUntil: 'networkidle2',
            });
        } catch(exception) {
            return {
                status: 'error',
                message: exception.message
            }
        }

        return object;
    }

    async closePage() {
        return await this.browser.close();
    }

    delay(time) {
        return new Promise(function(resolve) { 
            setTimeout(resolve, time)
        });
    }
}
