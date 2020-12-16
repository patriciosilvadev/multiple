const client = require('../config/wa.config');

exports.send = async (req, res, next) => {
    const { numberPhone, message } = req.body;
    client.sendMessage(`${numberPhone}@c.us`, message);

    res.status(200).json({
        to: numberPhone,
        message,
        status: 'succes'
    })
}