module.exports = function(router, passport){
    console.log('route_member 호출!');

    router.route('/').get((req, res) =>{ // localhost:3000번으로 들어갈 경우 
        res.render('index.ejs'); // 화면에 출력
    });

 router.route('/signup').get((req, res) =>{
        res.render('signup.ejs');
    });
    //회원가입에서 누를시 
    router.route('/signup').post(passport.authenticate('local-signup', {
        successRedirect: '/profile', // 인증을 성공한 경우
        failureRedirect: '/signup', // 실패할 경우
        failureFlash: true
    }));


}