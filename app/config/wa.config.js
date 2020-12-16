const { Client } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');

const SESSION_FILE_PATH = path.join(__dirname, './whatsapp-session.json');
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    console.log('ada')
    sessionCfg = require(SESSION_FILE_PATH);
}

const client = new Client({
    puppeteer: {
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ],
        headless: true
    }, session: sessionCfg
});

client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
    sessionCfg = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
        if (err) {
            console.error(err);
        }
    });
});


client.initialize();
module.exports = client;
