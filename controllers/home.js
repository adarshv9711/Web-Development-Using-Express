
/* GET home page. */
exports.home = function(req,res,next){
    res.render('home', { title: 'Home' });
}

exports.submit = function(req,res,next){
    var sess;
    console.log("input:",{"username":req.body.username},{"password":req.body.password});
    var login = [req.body.username,req.body.password];
    var user = req.body.username;
    let config= require('../config.js');
    // create promise so function call to config.login is resolved and handled before redirecting
    const output = new Promise((resolve,reject)=>{
    resolve(config.login(login));
    console.log(output);});
    output.then((status)=>{
        sess=req.session;
        req.session.name = user;
        console.log("welcome ",req.session.name,sess);
        res.redirect('/login');
        console.log("this is output : " , status);})
    .catch(()=>{res.redirect('/'); console.log("This is output:" , false)});
    
}

exports.redirect = function(req,res,next){
    res.render('login.ejs');
}

exports.logout = (req,res,next)=>{
    sess=req.session.destroy();
    res.redirect('/');
    console.log("session destroyed ", sess);
}



