var express = require('express'); 
var morgan = require('morgan'); 
var bodyParser = require('body-parser'); 
var swig = require('swig'); 

var app = express();

// swig rendering boilerplate code 
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

// logging and body parsing boilerplate
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// statically serve front end dependencies (bootstrap & jquery)
app.use('/bootstrap', express.static(__dirname + '/bower_components/bootswatch/sandstone'));
app.use('/fonts', express.static(__dirname + '/bower_components/bootswatch/fonts'));
app.use('/jquery', express.static(__dirname + '/bower_components/jquery/dist'));


// serve static files 
app.use(express.static(__dirname + '/public'))


// middleware for our dynamic routes 
app.use('/', require('./routes'));


//error handling logic (this is where next takes our error)
app.use(function(err, req, res, next){
  console.log('err: ', err)
  res.status(err.status || 500)
  // presumes that we have some basic error html 
  // res.render('error', {
  //     error: err
  // });
});

var port = 3000;; 

app.listen(port, function(){
  console.log('the server is listening on port: ', port)
})
