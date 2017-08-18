var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');

var app = express();


app.use(expressValidator());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sarahaha - Ghufron Fikrianto ' });
  io.on('connection', function(socket){
    console.log('a user connected');
  })
});

router.post('/msg', function(req, res, next) {
  req.check('message-box', 'Invalid message').notEmpty();


  req.getValidationResult().then(function(result) {
    if (!result.isEmpty()) {
      return;
    }else{
      console.log(req);
      return;
    }
  });


});

module.exports = router;
