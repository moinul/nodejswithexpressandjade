var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('./home/home', { title: 'Express' });
});

router.get('/logout', function (req, res) {
    res.render('./home/logout', {title: 'Logout'});
});
module.exports = router;
