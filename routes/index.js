var express = require('express');

var router = express.Router();
const userModel = require("./users");
const passport = require('passport');
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

//homepage
router.get('/', function(req, res, next) {
  res.render('index');
});

//profile
router.get('/profile',function(req, res, next) 
{
  if(req.isAuthenticated())
  {
    res.render('profile', { username: req.user.username });
  }
  else
  {
    res.redirect('/login'); // Redirect to login if not authenticated

  }
  
});

// GET route for rendering the login page

router.get('/login',function(req, res, next) {
  res.render('login');
});

//  invalid route
router.get('/invalid', function(req, res, next) {
    res.render('invalid');
  });

//post route for handling login
router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/invalid"
}));

//register
router.post('/register', function(req, res, next) {
  var userdata = new userModel({
    username: req.body.username,
    secret : req.body.secret
  })


userModel.register(userdata, req.body.password)
    .then(function (registereduser) {
      passport.authenticate("local")(req,res, function()
    {
      res.redirect('/profile');
    })
    })
  });



//logout 
router.get('/logout', function(req, res, next) {
    req.logOut(function(err)
  {
    if(err) return next(err);
    res.redirect("/login");
  })
  });  

function isLoggedIn(req,res,next)
{
   if(req.isAuthenticated())
  {
    return next();
  }
  res.redirect("/");
}  




module.exports = router;
