var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.cookie('uid', '1', { expires: new Date(Date.now() + 1000), httpOnly: true });
    res.render('index', { title: 'zuojie' });
});

module.exports = router;
