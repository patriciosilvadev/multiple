module.exports = io => {
    const express = require('express');
    const router = express.Router();
    const chat = require('../controller/api-wa')

    const socket = (req, res, next) => {
        req.io = io;
        next();
    }

    router.post('/send', chat.send);
    router.get('/getAllClient', chat.getAllClient);
    router.post('/createServer', socket, chat.createServer);

    return router;
}