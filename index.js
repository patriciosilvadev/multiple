const app = require('express')();
const server = require('http').createServer(app);
const io = require('./app/config/socket.config')(server);


require('./app/config/autoload')(app, io);
server.listen(8080, () => console.log(`listening port ${8080}`));