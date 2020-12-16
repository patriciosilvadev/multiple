const express = require('express');
const router = express.Router();
const chat = require('../controller/api-wa')

router.post('/send', chat.send);

module.exports = router;