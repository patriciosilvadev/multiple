module.exports = (app, io = null) => {
    app.use('/api', require('./api-wa.route')(io));
}