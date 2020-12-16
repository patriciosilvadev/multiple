module.exports = async (client, io = null) => {
    const qrcode = require('qrcode');
    
    io.on('connection', socket => {
        client.on('qr', (qr) => {
            console.log('login', qr)
            qrcode.toDataURL(qr, (err, url) => {
                socket.emit('qrcode', { data: url });
            })
        });
    });
}