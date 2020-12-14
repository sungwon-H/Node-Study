const local_signup = require('./passport/local_signup'); // 
const local_login = require('./passport/local_login');

module.exports = function(app, passport){
    console.log('config/passport 호출!');

    passport.serializeUser((user, done) => {
        console.log('serializeUser() 호출!', user);
        done(null, user);   // 콜백에서 넘겨주는 user 객체의 정보를 이용하여 세션을 생성합니다.
    });

    passport.deserializeUser((user, done) => {
        console.log('deserializeUser() 호출!', user);
        done(null, user);
    });



    passport.use('local-signup', local_signup); // 
    passport.use('local-login', local_login);
}