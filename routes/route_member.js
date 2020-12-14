module.exports = function(router, passport){
    console.log('route_member 호출!');

    router.route('/').get((req, res) =>{ // localhost:3000번으로 들어갈 경우 
        res.render('index.ejs'); // 화면에 출력
    })
}