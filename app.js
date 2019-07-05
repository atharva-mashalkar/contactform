var express = require('express');
var contactController = require('./controllers/contactController.js');
var app = express();

app.set('view engine' , 'ejs');

app.use(express.static('./public'));

contactController(app);

app.listen(3000,function(){
  console.log('You are listening to port 3000');
});
