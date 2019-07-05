var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs =require('fs');

mongoose.connect('mongodb+srv://atharva:Atharva@2000@cluster0-x0ctr.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true });

var contactSchema = new mongoose.Schema({
  FirstName :{
    type:String
  },
  LastName :{
    type:String
  },
  Email :{
    type:String
  },
  DOB :{
    type:String
  },
  PhNumber :{
    type:String
  }
});

var ContactME = mongoose.model('ContactME',contactSchema);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/contact',function(req,res){
      res.render('contact');
  });

  app.post('/thankyou',urlencodedParser,function(req,res){
    var newContactME = ContactME(req.body).save(function(err,data){
      if(err) throw err;
      res.render('thankyou',{contactme: data});
    });

  });
};
