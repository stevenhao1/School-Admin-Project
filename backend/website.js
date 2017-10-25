var express = require('express');
var app = express();
var mongodb = require('mongodb');

// Block the header from containing information about the server
app.disable('x-powered-by');
// Set up Handlebars
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

(app.engine('handlebars', handlebars.engine)) 

app.use(require('body-parser').urlencoded({extended: true}));

//if(!req.cookies.username)
  //res.redirect()

var formidable = require('formidable');
// Import credentials which are used for secure cookies
var credentials = require('./credentials.js');
app.use(require('cookie-parser')(credentials.cookieSecret));


var session = require('express-session');

var assembleHandlebars = require('assemble-handlebars');

assemble: {
  options: {
    // Assemble will automatically resolve the path
    helpers: ['handlebars-helper-moment', 'foo/*.js']
  }
}


// parseurl provides info on the url of a request object
var parseurl = require('parseurl');

app.use(session({
  // Only save back to the session store if a change was made
  resave: false,

  // Doesn't store data if a session is new and hasn't been modified
  saveUninitialized: true,

  // The secret string used to sign the session id cookie
  secret: credentials.cookieSecret,
}));


// Create a directory called public and then a directory named img inside of it app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
   // Point at the home.handlebars view
  res.render('index');
});

// If we want /about we'd have to define it
// before this route
app.get('/homepage', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('homepage');
});

// If we want /about we'd have to define it
// before this route
app.get('/index', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('index');
});

// If we want /about we'd have to define it
// before this route
app.get('/invalidsearchresult', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('invalidsearchresult');
});

// If we want /about we'd have to define it
// before this route
app.get('/studentperformance', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('studentperformance');
});

// If we want /about we'd have to define it
// before this route
app.get('/statistics', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('statistics');
});

// If we want /about we'd have to define it
// before this route
app.get('/budget', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('budget');
});

// If we want /about we'd have to define it
// before this route
app.get('/inventory', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('inventory');
});

// If we want /about we'd have to define it
// before this route
app.get('/changeformer', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('changeformer');
});


// If we want /about we'd have to define it
// before this route
app.get('/addgrades', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('addgrades');
});


// If we want /about we'd have to define it
// before this route
app.get('/studentinformation', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('studentinformation');
});

// If we want /about we'd have to define it
// before this route
app.get('/facultyinformation', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('facultyinformation');
});

// If we want /about we'd have to define it
// before this route
app.get('/donation', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('donation');
});

// If we want /about we'd have to define it
// before this route
app.get('/aboutus', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('aboutus');
});

// If we want /about we'd have to define it
// before this route
app.get('/displayitem', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('displayitem');
});

// If we want /about we'd have to define it
// before this route
app.get('/formerstudents', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('formerstudents');
});

// If we want /about we'd have to define it
// before this route
app.get('/adddonation', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('adddonation');
});

// If we want /about we'd have to define it
// before this route
app.get('/additem', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('additem');
});

// If we want /about we'd have to define it
// before this route
app.get('/searchitem', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('searchitem');
});
// If we want /about we'd have to define it
// before this route
app.get('/addexpense', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('addexpense');
});

// If we want /about we'd have to define it
// before this route
app.get('/addincome', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('addincome');
});

// If we want /about we'd have to define it
// before this route
app.get('/addstudent', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('addstudent');
});

// If we want /about we'd have to define it
// before this route
app.get('/addfaculty', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('addfaculty');
});

// If we want /about we'd have to define it
// before this route
app.get('/updatebudget', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('updatebudget');
});


// If we want /about we'd have to define it
// before this route
app.get('/formerfaculty', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('formerfaculty');
});

// If we want /about we'd have to define it
// before this route
app.get('/updateday', function(req, res){
  // Point at the about.handlebars view
  // Allow for the test specified in tests-about.js
  res.render('updateday');
});

app.get('/si', function(req, res,next) {
   var resultArray = {
                      studentinformation : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var studentinformation = db.collection('studentinformation').find({former:false});
      studentinformation.forEach(function(doc, err) {
         resultArray.studentinformation.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);   
       }, function() {
         db.close();
         res.render('studentinformation', {studentinformation: resultArray.studentinformation, donation: resultArray.donation});
      });
      
   });
});

app.get('/fost', function(req, res,next) {
   var resultArray = {
                      studentinformation : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var studentinformation = db.collection('studentinformation').find({former:true});
      studentinformation.forEach(function(doc, err) {
         resultArray.studentinformation.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);   
       }, function() {
         db.close();
         res.render('formerstudents', {studentinformation: resultArray.studentinformation, donation: resultArray.donation});
      });
      
   });
});

app.get('/fi', function(req, res,next) {
   var resultArray = {
                      facultyinformation : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var facultyinformation = db.collection('facultyinformation').find();
      facultyinformation.forEach(function(doc, err) {
         resultArray.facultyinformation.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);   
       }, function() {
         db.close();
         res.render('facultyinformation', {facultyinformation: resultArray.facultyinformation, donation: resultArray.donation});
      });
      
   });
});

app.get('/in', function(req, res,next) {
   var resultArray = {
                      inventory : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var inventory = db.collection('inventory').find();
      inventory.forEach(function(doc, err) {
         resultArray.inventory.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);   
       }, function() {
         db.close();
         res.render('inventory', {inventory: resultArray.inventory, donation: resultArray.donation});
      });
      
   });
});

app.get('/don', function(req, res,next) {
   var resultArray = {
                      studentinformation : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var studentinformation = db.collection('studentinformation').find();
      studentinformation.forEach(function(doc, err) {
         resultArray.studentinformation.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);
       }, function() {
         db.close();
         res.render('donation', {studentinformation: resultArray.studentinformation, donation: resultArray.donation});
      });
      
   });
});

app.get('/exp', function(req, res,next) {
   var resultArray = {
                      expenditure : [],
                      income : [],
                      requiredbudget : [],
                      donation:[],
                      remainingdays : []

                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var expenditure = db.collection('expenditure').find();
      expenditure.forEach(function(doc, err) {
         resultArray.expenditure.push(doc);
      });
      var requiredbudget = db.collection('requiredbudget').find();
      requiredbudget.forEach(function(doc, err) {
         resultArray.requiredbudget.push(doc);
      });
      var remainingdays = db.collection('remainingdays').find();
      remainingdays.forEach(function(doc, err) {
         resultArray.remainingdays.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc, err) {
         resultArray.donation.push(doc);
      });
      var income = db.collection('income').find();
      income.forEach(function(doc,err){
          resultArray.income.push(doc);   
       }, function() {
         db.close();
         res.render('budget', {expenditure: resultArray.expenditure, income: resultArray.income, requiredbudget: resultArray.requiredbudget, donation: resultArray.donation, remainingdays: resultArray.remainingdays});
      });
      
   });
});

app.get('/gra', function(req, res,next) {
   var resultArray = {
                      studentinformation : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var studentinformation = db.collection('studentinformation').find({former:false});
      studentinformation.forEach(function(doc, err) {
         resultArray.studentinformation.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);
       }, function() {
         db.close();
         res.render('studentperformance', {studentinformation: resultArray.studentinformation, donation: resultArray.donation});
      });
      
   });
});

app.get('/gc', function(req, res,next) {
   var resultArray = {
                      studentinformation : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var studentinformation = db.collection('studentinformation').find({former:false});
      studentinformation.forEach(function(doc, err) {
         resultArray.studentinformation.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);
       }, function() {
         db.close();
         res.render('addgrades', {studentinformation: resultArray.studentinformation, donation: resultArray.donation});
      });
      
   });
});

app.get('/displayformer', function(req, res,next) {
   var resultArray = {
                      studentinformation : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var studentinformation = db.collection('studentinformation').find({former:true});
      studentinformation.forEach(function(doc, err) {
         resultArray.studentinformation.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);
       }, function() {
         db.close();
         res.render('removeformerstudent', {studentinformation: resultArray.studentinformation, donation: resultArray.donation});
      });
      
   });
});

app.get('/displaycurrent', function(req, res,next) {
   var resultArray = {
                      studentinformation : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var studentinformation = db.collection('studentinformation').find({former:false});
      studentinformation.forEach(function(doc, err) {
         resultArray.studentinformation.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);
       }, function() {
         db.close();
         res.render('movecurrent', {studentinformation: resultArray.studentinformation, donation: resultArray.donation});
      });
      
   });
});

app.get('/ric', function(req, res,next) {
   var resultArray = {
                      inventory : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var inventory = db.collection('inventory').find({});
      inventory.forEach(function(doc, err) {
         resultArray.inventory.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);
       }, function() {
         db.close();
         res.render('removeitemcheck', {inventory: resultArray.inventory, donation: resultArray.donation});
      });
      
   });
});

app.get('/rfc', function(req, res,next) {
   var resultArray = {
                      facultyinformation : [],
                      donation : []
                     };

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
   MongoClient.connect(url, function(err, db) {
      var facultyinformation = db.collection('facultyinformation').find({});
      facultyinformation.forEach(function(doc, err) {
         resultArray.facultyinformation.push(doc);
      });
      var donation = db.collection('donation').find();
      donation.forEach(function(doc,err){
          resultArray.donation.push(doc);
       }, function() {
         db.close();
         res.render('removefacultycheck', {facultyinformation: resultArray.facultyinformation, donation: resultArray.donation});
      });
      
   });
});
   

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next){
  console.log('Looking for URL : ' + req.url);
  next();
});
// You can also report and throw errors
app.get('/junk', function(req, res, next){
  console.log('Tried to access /junk');
  throw new Error('/junk does\'t exist');
});
// Catches the error and logs it and then continues down the pipeline
app.use(function(err, req, res, next){
  console.log('Error : ' + err.message);
  next();
});

// Link to contact view
app.get('/contact', function(req, res){

  // CSRF tokens are generated in cookie and form data & they are verified when the user posts
  res.render('contact', { csrf: 'CSRF token here' });
});

// Sent here after the form is processed
app.get('/thankyou', function(req, res){
  res.render('thankyou');
});

app.get('/login', function(req, res){
    res.render('login', {title: 'Login' });
});



app.post('/process', function(req, res){
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
MongoClient.connect(url, function(err, db){
      if (err) {
          console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
var collection = db.collection('login');
var a = req.body.username;     var b = req.body.password;       
 collection.find({"username": a, "password":b}).toArray(function (err, result) {
       if (err) {
              res.send(err);
     } else if (result.length) {
res.redirect("/homepage");
       } else {
res.send('Invalid login');
      }
db.close();
    });      }    });  });


app.post('/searchinv', function(req, res){
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/website';
MongoClient.connect(url, function(err, db){
      if (err) {
          console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
var collection = db.collection('inventory');
var a = req.body.search;        
 collection.find({"name": a}).toArray(function (err, result) {
       if (err) {
              res.send(err);
     } 

     else if (result.length>0) {
        res.render("displayitem", {"name":result});
       } else {
res.redirect("/invalidsearchresult");
      }
db.close();
    });      }    });  });

app.post('/donate', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
  var collection = db.collection('donation'); // Get the documents collection
        var donation1 = {name: req.body.name, email: req.body.email, amount: req.body.amount, meansofpayment: req.body.payment, date: req.body.date};
      collection.insert([donation1], function (err, result){     // Insert the student data
          if (err) {
            console.log(err);
          } else {
         res.redirect("/don");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });



app.post('/invent', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
  var collection = db.collection('inventory'); // Get the documents collection
        var item1 = {name: req.body.name, photo: req.body.photo, quantity: req.body.quantity, location: req.body.location, itemid: req.body.quantity.concat(req.body.name.concat(req.body.location))}
      collection.insert([item1], function (err, result){     // Insert the student data
          if (err) {
            console.log(err);
          } else {
         res.redirect("/in");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/expense', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
  var collection = db.collection('expenditure'); // Get the documents collection
        var expense1 = {purpose: req.body.purpose, amount: req.body.amount, meansofpayment: req.body.payment};
      collection.insert([expense1], function (err, result){     // Insert the student data
          if (err) {
            console.log(err);
          } else {
         res.redirect("/exp");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/income', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
  var collection = db.collection('income'); // Get the documents collection
        var income1 = {source: req.body.source, amount: req.body.amount, meansofpayment: req.body.payment};
      collection.insert([income1], function (err, result){     // Insert the student data
          if (err) {
            console.log(err);
          } else {
         res.redirect("/exp");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/updatebudget', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('requiredbudget'); // Get the documents collection
        var budget1 = {$set: {update: req.body.update}};
        var query = {"userid":42};

        db.collection('requiredbudget').updateOne (query, budget1, function (err,result)

        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/exp");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/focur', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('studentinformation'); // Get the documents collection
        var budget1 = {$set: {former: true}};
        var query = {former:false};

        db.collection('studentinformation').updateMany (query, budget1, function (err,result)

        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/si");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/moveone', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('studentinformation'); // Get the documents collection
        var budget1 = {$set: {former: true}};
        var query = req.body.oid;

        db.collection('studentinformation').updateOne ({"studentid":query}, budget1, function (err,result)

        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/si");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/removeitem', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('inventory'); // Get the documents collection
        var query = req.body.oid;

        db.collection('inventory').remove ({"itemid":query}, function (err,result)


        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/in");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/rfs', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('studentinformation'); // Get the documents collection

        db.collection('studentinformation').remove ({"former":true}, function (err,result)


        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/fost");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/removefaculty', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('facultyinformation'); // Get the documents collection
        var query = req.body.oid;

        db.collection('facultyinformation').remove ({"facultyid":query}, function (err,result)


        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/fi");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/specificremove', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('studentinformation'); // Get the documents collection
        var query = req.body.oid;
        console.log(query);
        db.collection('studentinformation').remove ({"studentid":query}, function (err,result)

        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/fost");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/usg', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('studentinformation'); // Get the documents collection
        var query = req.body.oid;
        var grade1 = {$set: {math: req.body.math, english: req.body.english, science: req.body.science, humanities: req.body.humanities, art: req.body.art}};

        db.collection('studentinformation').update ({"studentid":query}, grade1, function (err,result)

        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/gra");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/remin', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('income'); // Get the documents collection

        db.collection('income').remove (function (err,result)

        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/exp");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/remexp', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('expenditure'); // Get the documents collection

        db.collection('expenditure').remove (function (err,result)

        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/exp");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/addstudent', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
  var collection = db.collection('studentinformation'); // Get the documents collection
        var student1 = {former: false, math: null, english:null, science:null, humanities:null, art:null, photo: req.body.photo, name: req.body.name, DOB: req.body.DOB, gender: req.body.gender, nationality: req.body.nationality, language: req.body.language, joindate: req.body.joindate, leavedate: req.body.leavedate, studentid: req.body.leavedate.concat(req.body.joindate.concat(req.body.language.concat(req.body.name.concat(req.body.DOB.concat(req.body.gender.concat(req.body.nationality))))))};
      collection.insert([student1], function (err, result){     // Insert the student data
          if (err) {
            console.log(err);
          } else {
         res.redirect("/si");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/addfaculty', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
  var collection = db.collection('facultyinformation'); // Get the documents collection
        var faculty1 = {name: req.body.name, photo: req.body.photo, role: req.body.role, email: req.body.email, phone: req.body.phone, joindate: req.body.joindate, facultyid:req.body.joindate.concat(req.body.phone.concat(req.body.email.concat(req.body.role.concat(req.body.name))))};
      collection.insert([faculty1], function (err, result){     // Insert the student data
          if (err) {
            console.log(err);
          } else {
         res.redirect("/fi");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

app.post('/changeday', function(req, res){
var MongoClient = mongodb.MongoClient;
    var url = 'mongodb://localhost:27017/website';
  MongoClient.connect(url, function(err, db){       // Connect to the server
      if (err) {
        console.log('Unable to connect to the Server:', err);
      } else {
        console.log('Connected to Server');
        var collection = db.collection('remainingdays'); // Get the documents collection
        var bodything = req.body.update;
        var budget1 = {$set: {update:bodything}};
        var query = {"userid":69};

        db.collection('remainingdays').updateOne (query, budget1, function (err,result)

        {

          if (err) {
            console.log(err);
          } else {
         res.redirect("/exp");      // Redirect to the updated student list
          }
   db.close();
        });
    }
    });   });

// Open file-upload.handlebars and store the current year  and month. When the form is submitted the year and month will be passed
app.get('/file-upload', function(req, res){
  var now = new Date();
  res.render('file-upload',{
    year: now.getFullYear(),
    month: now.getMonth() });
  });
// file-upload.handlebars contains the form that calls here
  app.post('/file-upload/:year/:month',
  function(req, res){
 // Parse a file that was uploaded
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, file){
      if(err)
        return res.redirect(303, '/error');
      console.log('Received File');
    // Output file information
      console.log(file);
      res.redirect( 303, '/thankyou');
  });
});

  // Demonstrate how to set a cookie
app.get('/cookie', function(req, res){

  // Set the key and value as well as expiration
  res.cookie('username', 'DerekBanas', {expire : new Date() + 9999}).send('username has the value of : DerekBanas');
});

// Show stored cookies in the console
app.get('/listcookies', function(req, res){
  console.log("Cookies : ", req.cookies);
  res.send('Look in console for cookies');
});

// Delete a cookie
app.get('/deletecookie', function(req, res){
  res.clearCookie('username');
  res.send('username Cookie Deleted');
});

// Always at the end

 app.use(function(req, res) {
  // Define the content type
  res.type('text/html');
  // The default status is 200
  res.status(404);
  // Point at the 404.handlebars view
  res.render('404');
});
// Custom 500 Page
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  // Point at the 500.handlebars view
  res.render('500');
});



app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate');
});
