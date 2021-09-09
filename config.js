const { request } = require('express');
var mysql = require('mysql');
var config = {
        host: "localhost",
        user: "root",
        password: "",
        database: "db"
    };
con = mysql.createConnection(config);
con.connect((err)=>{
    if(err)
    {
        console.log("Error");
    }
    else
    console.log("Connected");
});  
module.exports =
{
    login : function (arr)
    {
        var success;
        const p = new Promise((resolve,reject)=>{

            let query= `SELECT * FROM login WHERE username = ? AND password=?`;
            // syncronise the function below to prevent con.query function from returning value before logic is executed
            con.query(query,arr,function(err,result,fields)
            {
                if (err) throw err;
                if(result==''){
                    console.log('user not found');
                    reject(false);
                }
                else 
                {
                    console.log(result);
                    console.log('Welcome');
                    resolve(true);          
                }
        });});
        p.then((status)=>{console.log(status);return status;})
        .catch((status)=>{console.log(status);return status;});
        return p;
    }
}

