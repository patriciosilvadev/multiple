module.exports = io => {
    io.on('connection', socket => {
        socket.emit('welcome', { data: 'terhubung' });
    });
    
}