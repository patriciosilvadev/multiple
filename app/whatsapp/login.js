module.exports = async (client, io, number) => {
    const qrcode = require('qrcode');

    client.on('qr', (qr) => {
        console.log(`login from number ${number}`, qr)
        qrcode.toDataURL(qr, (err, url) => {
            io.emit(`qrcode-${number}`, {
                image: url,
                number: number
            });
        })
    });

    client.on('ready', () => {
        console.log(`ready from number ${number}`);
        io.emit(`ready-${number}`, {
            data: 'server ready'
        })
    });
}