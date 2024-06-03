const User = require('../models/user');
const notifier = require('node-notifier');
module.exports.Profile = function(req,res){
    return res.render('profile', {
        title: 'Profile'
    })
}
module.exports.signup = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('signup', {
        title: "SignUp"
    })
}
module.exports.signin = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    const notification = {
        type: 'info',
        message: 'SignUp first!'
    };
    return res.render('signin', {
        title: "SignIn",
        notification: notification
    })
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.password1){
        notifier.notify({
            title: 'Wrong Matching',
            message: 'Not matching passwords while signup!',
            sound: true,
            wait: true
          });
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            notifier.notify({
                title: 'No User Found',
                message: 'Error in finding in databse!',
                sound: true,
                wait: true
              });
            return;
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("Error in creating");
                    return;
                }
                notifier.notify({
                    title: 'User Created',
                    message: 'Created User in database for signup!',
                    sound: true,
                    wait: true
                  });
                return res.redirect('/users/signin');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}

module.exports.createsession = function(req,res){
    return res.redirect('/');
}

module.exports.destroysession = function(req,res){
    req.logout(req.user, err => {
        if(err) return next(err);
        res.redirect("/");
    });
}