var express = require('express');
var router = express.Router();

/* GET pages. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Order Form',
 h1: 'Order a Professor',
 h2: 'Rich Freeman',


});
});


module.exports = router;


