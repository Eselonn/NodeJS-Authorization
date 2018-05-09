const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:""
});



module.exports = {
     TestConnection()
    {
        console.log("Testing connection with database...")
        try{
            connection.connect();
            console.log("Connected!")
        }   
        catch(e){
            console.log("Cannot connect!")
        }  
    }
}
