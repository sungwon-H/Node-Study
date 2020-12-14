// 패스포트 회원가입
// 로컬 회원가입
const LocalStrategy = require('passport-local').Strategy; // 로컬쪽 관리 회원가입 할떄 사용

module.exports = new LocalStrategy({ // 바깥에서 사용가능
    usernameField: 'userid',
    passwordField: 'userpw',
    passReqToCallback: true // 패스워드 참 거짓 확인
}, (req, userid, userpw, done)=> {
    const name = req.body.name;
    const age = req.body.age;
    console.log(`passport의 local-signup 호출 : userid = ${userid}, userpw=${userpw}, name =${name}, age = ${age}`);


    // 실행문장에서 데이터가 blocking 되지 않도록 사용 -> async 방식으로 변경 // 사용자가 몰릴떄
    process.nextTick(() => {
        let database = req.app.get('database');
        database.MemberModel.findOne({userid:userid}, (err, user) => {
            if(err) { return done(err); }
            if(user){
                console.log('이미 가입된 계정이 있습니다.');
                return done(null, false);
            }else{
                let user = new database.MemberModel({userid:userid, userpw:userpw, name:name, age:age});
                user.save((err) => {
                    if(err) { throw err; }
                    console.log('가입완료!');
                    return done(null, user);                    
                })
            }
        });
    });

});
