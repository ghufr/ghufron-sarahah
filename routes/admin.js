var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');

var app = express();

router.get('/', function(req, res, next) {
  res.render('admin');

});


module.exports = router;