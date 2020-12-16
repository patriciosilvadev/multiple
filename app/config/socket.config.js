module.exports = server => {
    const socketio = require('socket.io');

    const io = socketio(server, {
        cors: {
            origin: true,
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    return io;
}