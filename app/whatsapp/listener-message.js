const client = require(".")

module.exports = client => {
    const { Message } = require('../models');
    client.on('message', msg => {
        console.log(msg);
    });
}