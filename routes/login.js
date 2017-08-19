var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');

var app = express();

router.get('/', function(req, res, next) {
  console.log('Login from login');
  res.render('login');

});

module.exports = router;
