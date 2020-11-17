const puppeteerOptions = {
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
};
const { Client } = require('whatsapp-web.js');
const client = new Client(puppeteerOptions);
const qrCode = require('qrcode');

exports.LoginWa = async (req, res, next) => {
    client.on('qr', async (qr) => {
        var gambar = await qrCode.toDataURL(qr);
        var body = "<center><img src='" + gambar + "'></img><br/>scan untuk login</center>";
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(body));
    });

}

exports.sendMessage = (req, res, next) => {
    const { numberPhone, message } = req.body; 
    client.sendMessage(`${numberPhone}@c.us`, message);

    res.status(200).json({
        to: numberPhone,
        message,
        status: 'succes'
    })  
}

client.initialize();