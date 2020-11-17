const express = require('express');
const router = express.Router();
const chat = require('../controller/chat')
const auth = require("../middleware/basicAuth")

router.get('/login', chat.LoginWa);
router.post('/send', chat.sendMessage);
router.get('/tes', auth, (req, res, next) => {
    res.status(200).json({message: "authorization succes"})
})

module.exports = router;