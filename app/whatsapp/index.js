module.exports = (io = null) => {
    const client = require('../config/wa.config');

    require('./login')(client, io);
    require('./listener-message')(client);
}