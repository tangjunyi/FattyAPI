const req = require("request");

class UserService {
    userlogin(params, res) {
        let cookie = params.cookie || '';
        delete params.cookie;
        req({
            //填写链接后台接口区域
            url: config.openapi + '方法地址',
            method: "POST",
            json: true,
            headers: {
                'contentType': 'application/json; charset=utf-8',
                'cookie': cookie
            },
            body: params
        }, function(error, response, body) {
            res.send(body);
        });
    }
}
module.exports = UserService;