const router = require('express').Router();
const FileService = importService('service/file');

router.post('/list', function(req, res) {
    FileService.filelist(Object.assign({}, req.body, {
        cookie: req.headers.cookie
    }), res);
});

module.exports = router;