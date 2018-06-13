const router = require('express').Router();

router.get('/list', function(req, res) {
    res.render('a.html');
});

module.exports = router;