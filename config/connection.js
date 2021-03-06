var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Larita1*",
    database: "burger_db"
  })
}
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   Port: 8000,
//   password: "Larita1*",
//   database: "burger_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
