var LocalStrategy = require('passport-local').Strategy;
var adminUser = require('../models/users');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        adminUser.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
                usernameField : 'username',
                passwordField : 'password',
                passReqToCallback : true
            },
            function(req, username, password, done) {
                process.nextTick(function() {
                    // find a user in Mongo with provided username
                    adminUser.findOne({'username':username},function(err, user) {
                        // In case of any error return
                        if (err){
                            console.log('Error in SignUp: '+err);
                            return done(err);
                        }
                        // already exists
                        if (user) {
                            console.log('User already exists');
                            return done(null, false,
                                req.flash('message','User Already Exists'));
                        } else {
                            // if there is no user with that email
                            // create the user
                            var newUser = new adminUser();
                            // set the user's local credentials
                            newUser.local.username = username;
                            newUser.local.password = newUser.generateHash(password);
                            // save the user
                            newUser.save(function(err) {
                                if (err){
                                    console.log('Error in Saving user: '+err);
                                    throw err;
                                }
                                console.log('User Registration succesful');
                                return done(null, newUser);
                            });
                        }
                    });
                });
            })
    );

    passport.use('local-login', new LocalStrategy({
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback: true
        },
        function(req, username, password, done) {
            adminUser.findOne({ 'local.username':  username },
                function(err, user) {
                    if (err)
                        return done(err);
                    if (!user){
                        console.log('User Not Found with username '+username);
                        return done(null, false,
                            req.flash('message', 'User Not found.'));
                    }
                    if (!user.validPassword(password)){
                        console.log('Invalid Password');
                        return done(null, false,
                            req.flash('message', 'Invalid Password'));
                    }
                    console.log('All is well, return successful user');
                    return done(null, user);
                });
        }));
};