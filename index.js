const app = require('express')();
const server = require('http').createServer(app);
const io = require('./app/config/socket.config')(server);
const path = require('path');

app.use(require('express').static('client/build'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

require('./app/config/autoload')(app, io);
server.listen(8080, () => console.log(`listening port ${8080}`));