var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');

var app = express();

var firebase = require("firebase");
var moment = require('moment');


var config = {
   apiKey: "AIzaSyBhC9glJj3Lh2P8Tg50UxgMcA3yELE-40E",
   authDomain: "sarahaha-97e25.firebaseapp.com",
   databaseURL: "https://sarahaha-97e25.firebaseio.com",
   projectId: "sarahaha-97e25",
   storageBucket: "sarahaha-97e25.appspot.com",
   messagingSenderId: "710585161909"
 };
 firebase.initializeApp(config);

app.use(expressValidator());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sarahaha - Ghufron Fikrianto ' });

});

// app.get('/login', function(req, res, next) {
//   console.log('Login from index');
//   res.render('login');
//
// });

router.post('/', function(req, res, next) {

  // var result = req.checkBody('.message', 'Invalid message').notEmpty();

  req.getValidationResult().then(function(result) {
    if (!result.isEmpty()) {
      // res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));

      res.render('index', { title: 'Sarahaha - Ghufron Fikrianto ' });
      return;
    }else{
      writeMessage(req.body.message,moment().format());
      res.sendStatus(200);

    }
  });
});

function uuidv4() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}



function b(a){return a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,b)}
function writeMessage(msg, tm){
  // db.set({message:msg});
  console.log('Submit to firebase');
  firebase.database().ref(uuidv4()).set({
    message: msg,
    time: tm
  });

  // msgs.set({message:msg});
}

module.exports = router;
