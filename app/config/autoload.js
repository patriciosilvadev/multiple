module.exports = (app, io = null) => {
    const cors = require('cors')

    app.use(cors());
    require('../middleware/basic')(app);
    //require("../models");
    require('../routes')(app, io);
    require('../socket')(io);
}