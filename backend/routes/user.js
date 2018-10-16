var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var request = require('request');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

router.post('/signup', function (req, res, next) {
  User.find({email:req.body.email})
  .exec().then(user => {
      if(user.length > 1) {
          return res.status(409).json({
              message: "Email already exist"
          });
      } else {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if(err){
                  return res.status(500).json({
                      error:err
                  })
              } else {
    var user = new User({
          _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hash,
        email: req.body.email,
        role: 'User'
    });

    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'User creation failed',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result

        });
    });
  }
  })
  }
 })

})

router.post('/admin-signup', function (req, res, next) {
  User.find({email:req.body.email})
  .exec().then(user => {
      if(user.length > 1) {
          return res.status(409).json({
              message: "Email already exist"
          });
      } else {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if(err){
                  return res.status(500).json({
                      error:err
                  })
              } else {
    var user = new User({
          _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hash,
        email: req.body.email,
        role: 'Admin'
    });

    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Admin creation failed',
                error: err
            });
        }
        res.status(201).json({
            message: 'Admin created',
            obj: result

        });
    });
  }
  })
  }
 })

})

router.post('/signin', (req, res, next) => {
  //code not working - recaptcha
  let fetchedUser;

  User.findOne({ email: req.body.email }).then(user => {
    if(!user){
      return res.status(401).json({
        message: "Auth failed!!"
      });
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.password, user.password);
  }).then(result => {
    if(!result) {
      return res.status(401).json({
        message: "Auth failed"
      });
    }
    const token = jwt.sign({ email: fetchedUser.email, userId: fetchedUser._id, role: fetchedUser.role},
    "Secret_be_longer");

    res.status(200).json({
      token : token
    })
  }).catch(err => {
    return res.status(401).json({
       message : "Auth failed"
    })
  });
});


module.exports = router;
