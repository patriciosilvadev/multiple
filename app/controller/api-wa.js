const { sessions, createUser } = require('../whatsapp');

exports.send = async (req, res, next) => {
    const { numberPhone, message, apiKey } = req.body;
    const data = sessions.find(x => x.id == apiKey);

    if (data == undefined) {
        res.status(200).json({
            to: numberPhone,
            message,
            status: `server with id ${apiKey} not found`,
        })
    } else {
        data.client.sendMessage(`${numberPhone}@c.us`, message);
        res.status(200).json({
            to: numberPhone,
            message,
            status: `success`,
        })
    }
}

exports.getAllClient = async (req, res, next) => {
    let dataSessions = null;

    if (sessions.length <= 0) {
        dataSessions = [];
    } else {
        dataSessions = sessions.map(x => ({
            name: x.name,
            id: x.id,
            description: x.description
        }))
    }

    res.status(200).json({
        data: dataSessions
    })
}

exports.createServer = async (req, res, next) => {
    const { name, description } = req.body;
    createUser(name, description, req.io);

    res.status(200).json({
        status: 'succes'
    })
}