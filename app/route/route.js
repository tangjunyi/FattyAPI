const viewRoute = require('./viewRoute');
const fileRoute = require('./fileRoute');

module.exports = function(app) {
    app.use('/', viewRoute);
    app.use('/api/file', fileRoute);
}