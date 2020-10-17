const express = require('express');
const router = express.Router();
const chat = require('../controller/chat')

router.get('/login', chat.LoginWa);
router.post('/send', chat.sendMessage);

module.exports = router;