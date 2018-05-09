const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


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

app.listen(7325);
