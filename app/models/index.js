const db = require('../config/database');

db.Message = require("./message.model.js")(db);

db.sequelize.sync();
module.exports = db;