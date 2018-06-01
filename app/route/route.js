const userRoute = require('./userRoute');

module.exports = function(app) {
    app.use('/user', userRoute);
}