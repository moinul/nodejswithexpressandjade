var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    /*res.send('respond with a resource tareq ')*/
    res.render('./users/list',{title:'User List'})
});

router.get('/add', function(req, res) {
    /*res.send('respond with a resource tareq ')*/
    res.render('./users/add',{title:'User Add'})
});

router.get('/edit', function(req, res) {
    /*res.send('respond with a resource tareq ')*/
    res.render('./users/edit',{title:'User Edit'})
});

module.exports = router;
