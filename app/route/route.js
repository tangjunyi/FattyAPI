const fileRoute = require('./fileRoute');

module.exports = function(app) {
    app.use('/file', fileRoute);
}