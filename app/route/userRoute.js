const router = require('express').Router();
const UserService = importService('service/user');

router.post('/login', function(req, res) {
    UserService.userlogin(Object.assign({}, req.body, {
        cookie: req.headers.cookie
    }), res);
});

module.exports = router;