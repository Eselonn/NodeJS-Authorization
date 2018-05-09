const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const database = require("./config/database.js");


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



require("./config/ruting.js")(app);

app.listen(7325, ()=>{
    console.log("Starting server...")
    database.TestConnection();
    database.SendQuery("SHOW DATABASES;")
});
