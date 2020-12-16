module.exports = (app, io = null) => {
    require('../middleware/basic')(app);
    require("../models");
    require('../routes')(app);
    require('../socket')(io);
    require('../whatsapp')(io);
}