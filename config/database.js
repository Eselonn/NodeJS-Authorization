const mysql = require('mysql');

const dbconnection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:""
});



module.exports = {
    TestConnection()
    {
        console.log("Testing connection with database...");
        try{
            dbconnection.connect();
            console.log("Connected!");
        }   
        catch(e){
            console.log("Cannot connect!");
        }  
    },

    SendQuery(SQL)
    {
        console.log("Sending Query to database...");
        dbconnection.query(SQL, (err, result, fields) =>{
                if (err){
                    console.log("Cannot send the Query");
                    throw err;
                } 
                console.log(result);
                console.log("Query sended!");
        });
        
    }
}
