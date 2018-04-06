var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var request = require('request');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

router.post('/', function (req, res, next) {

    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });

    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result

        });
    });

});

router.post('/signin', function(req, res, next){
  //code not working - recaptcha
  /*
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null)
  {
    return res.json({"responseError" : "Please select captcha first"});
  }

  const secretKey = "6LcmJFAUAAAAAIMHASJZ7icVS7zqzsdsy_snYK_s";

  const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;

  request(verificationURL,function(error,response,body) {
    body = JSON.parse(body);

    if(body.success !== undefined && !body.success) {
      return res.json({"responseError" : "Failed captcha verification"});
    }
  });*/

  User.findOne({ email: req.body.email} , function(err, user){

    if(err){
      return res.status(500).json({
        title: 'An error occurred',
        error: err
     });
    }

    if(!user){
      return res.status(401).json({
        title: 'Login Failed',
        error: {message: 'Invalid Login Credentials. Please Try Again. '}
      });
    }

    if(!bcrypt.compareSync(req.body.password, user.password)){
      return res.status(401).json({
         title: 'Login failed',
         error: {message: 'Invalid login credentials'}
      })
    }

    var token = jwt.sign({ user : user}, 'secret', {expiresIn : 7200} );

    return res.status(200).json({ message: 'Successfully logged in', token: token, userId: user._id });

  });
});



module.exports = router;
