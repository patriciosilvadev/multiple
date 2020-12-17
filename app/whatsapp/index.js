let sessions = [];

const createUser = (name, description, io) => {
    const { Client } = require('whatsapp-web.js');
    const { v4: uuidv4 } = require('uuid');
    const fs = require('fs');
    const path = require('path');

    let id = uuidv4();
    const SESSION_FILE_PATH = path.join(__dirname, `./whatsapp-session-${id}.json`);
    let sessionCfg;
    // if (fs.existsSync(SESSION_FILE_PATH)) {
    //     console.log('ada')
    //     sessionCfg = require(SESSION_FILE_PATH);
    // }

    const client = new Client({
        puppeteer: {
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ],
            headless: true
        }, session: sessionCfg
    });

    // client.on('authenticated', (session) => {
    //     console.log('AUTHENTICATED', session);
    //     sessionCfg = session;
    //     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
    //         if (err) {
    //             console.error(err);
    //         }
    //     });
    // });

    require('./login')(client, io, id);
    //require('./listener-message')(io);

    sessions.push({
        name,
        description,
        client: client,
        id: id
    });

    client.initialize();
}

exports.sessions = sessions;
exports.createUser = createUser;


