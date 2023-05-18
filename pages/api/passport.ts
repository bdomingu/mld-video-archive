// import passport from 'passport';
// import { Strategy as LocalStrategy } from 'passport-local';
// import User, { IUserDocument } from './models/User';
// import bcrypt from 'bcrypt';


// passport.use(new LocalStrategy(
//     {
//         usernameField : 'email'
//     },

//     function(email, password, done) {
        
//         User.findOne({email:email}, function(err:Error, user: IUserDocument) {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false, {message:'Incorrect email or password.'});
//             }
//             bcrypt.compare(password, user.password, function(err, res) {
//                 if (res) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false, {message: 'Incorrect email or password'});
//                 }
//             });
//         });
//     }
// ));

// passport.serializeUser((user, done) => {
//     console.log(user)
//     done(null, user.id);
// })

// passport.deserializeUser(async (id, done) => {
//     try {
//         const user = await User.findById(id);
//         done(null, user);
//     } catch (err) {
//         done(err);
//     }
// });

// export default passport;

