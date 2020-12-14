module.exports = function(router, passport){
    console.log('route_member 호출!');

    router.route('/').get((req, res) =>{ // localhost:3000번으로 들어갈 경우 
        res.render('index.ejs'); // 화면에 출력
    });

 router.route('/signup').get((req, res) =>{//signup페이지로 이동
        res.render('signup.ejs');
    });
    //회원가입에서 누를시 
    router.route('/signup').post(passport.authenticate('local-signup', { // signup버튼 클릭시 post방식으로 넘어갈경우 
        successRedirect: '/profile', // 인증을 성공한 경우
        failureRedirect: '/signup', // 실패할 경우
        failureFlash: true
    }));

    router.route('/profile').get((req, res) => {
        if(!req.user){
            console.log('사용자 인증이 안된 상태!');
            res.redirect('/');
            return;
        }
        console.log('사용자 인증된 상태');
        if(Array.isArray(req.user)){
            res.render('profile.ejs', {user: req.user[0]});
        }else{
            res.render('profile.ejs', {user: req.user});
        }
    });

}