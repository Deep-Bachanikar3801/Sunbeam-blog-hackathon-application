const mysql = require('mysql2')

const pool = mysql.createPool({
  host: "localhost",
  user: "D1_83978_GANESH",
  password: "Sgkp@174",
  port: 3306,
  database: "blogs_db",
  connectionLimit: 10,
});

module.exports = {
  pool,
}
