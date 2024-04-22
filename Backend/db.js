const mysql = require('mysql2')




const pool = mysql.createPool({
         host:'localhost',
         database:'Pune',
         user:'d1_83745_deep',
         password:'Deep3801',
         port:3306,
         connectionLimit:10, 
})


module.exports ={
    pool
}