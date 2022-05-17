var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "sania",
  password: "qwert1234@",
  database: "school",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

var studentTableCreateQuery = "DROP TABLE student";
con.query(studentTableCreateQuery, function (err, result) {
  if (err) throw err;
  console.log("Table deleted");
});

con.end();
