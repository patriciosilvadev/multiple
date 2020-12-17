module.exports = (app, io = null) => {
    require('../middleware/basic')(app);
    //require("../models");
    require('../routes')(app, io);
    require('../socket')(io);
}