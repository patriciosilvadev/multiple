module.exports = app => {
    const bodyParser = require('body-parser');
    const cors = require('cors')

    app.use(bodyParser.json());
    app.use(cors());
}