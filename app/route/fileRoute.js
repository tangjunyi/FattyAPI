const router = require('express').Router();
const FileController = importController('controller/file');

router.post('/list', function(req, res) {
    FileController.filelist(Object.assign({}, req.body, {
        cookie: req.headers.cookie
    }), res);
});

module.exports = router;