module.exports = function(app){
    app.get("/login", (reg, res) =>{
        res.render('pages/login');
    });

    app.get("/signUp", (reg, res) =>{
        res.render('pages/signUp');
    })

    app.get("/", (req, res)=>{
        res.render('pages/index');
    });

    app.post('/login', function(req, res) {
        res.send('Login: ' + req.body.username + ' Password: '+ req.body.pswd);

    });
}