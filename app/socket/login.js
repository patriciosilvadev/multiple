module.exports = (io) => {
    const { sessions } = require('../whatsapp');

    io.on('connection', socket => {
        socket.on('cek-status', msg => {
            let data = sessions.find(x => x.id == msg.id);
            if (data == undefined) {
                console.log('ada')
            } else {
                data.client.on('ready', () => {
                    console.log(`ready from number ${data.id}`);
                    socket.emit(`ready-${data.id}`, {
                        data: 'server ready'
                    })
                });
            }
            console.log(msg)
        })
    });
}