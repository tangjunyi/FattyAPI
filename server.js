const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log4js = require('log4js');

const config = require('./app/config/config')();
const common = require('./app/common/common')();

//定义全局config变量
global.config = config;

//配置log4js日志打印
log4js.configure(config.log4js);
logger = log4js.getLogger('app');
app.set('logger', logger);
app.use(log4js.connectLogger(logger, {
    level: 'auto',
    format: '{"project":"FattyAPI", "clientIP":":remote-addr", "responseTime":":response-timems", "method":":method", "uri":":url", "status":":status", "referer":":referrer", "user-agent":":user-agent", "session":":req[cookie]", "cookie":":req[cookie]", "Accept":":req[Accept]", "Content-Type":":req[Content-Type]", "X-Requested-With":":req[X-Requested-With]", "http-version":"HTTP/:http-version"}' //自定义输出格式
}));

//body传参中间件
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: false
}));

app.use(cookieParser(config.cookies.secretKey));

//配置路由
require('./app/route/route')(app);

const server = app.listen(config.port, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log(
        '(\\(\\ ' + '\n' +
        '( -.-) ' + '\n' +
        'o_(")(")' + '\n' +
        ' Started at ' + host + ':' + port + '@FattyAPI ' + new Date().Format("yyyy-MM-dd hh:mm:ss.S") + '\n');
});