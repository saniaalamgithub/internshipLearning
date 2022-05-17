var mysql = require("mysql");
var express = require("express");
var app = express();

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

var studentTableCreateQuery =
  "CREATE TABLE student (id INT, name VARCHAR(255), roll_no VARCHAR(255), address VARCHAR(255), section VARCHAR(255))";
con.query(studentTableCreateQuery, function (err, result) {
  if (err) throw err;
  console.log("Student created");
});

var studentInfoInsertion =
  "INSERT INTO student (id,name,roll_no,address,section) VALUES ('01', 'layla','1','narayangonj','A'),('02', 'sania','2','narayangonj','A'),('03', 'sinthy','3','narayangonj','A'),('04', 'sinji','4','narayangonj','A'),('05', 'ahona','5','narayangonj','A')";

con.query(studentInfoInsertion, function (err1, result1) {
  if (err1) throw err1;
  console.log("student 1 added");
});

app.get("/hello", function (req, res) {
  con.query("SELECT * FROM student WHERE roll_no < 3", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

app.get("/student/:id", function (req, res) {
  con.query(
    "SELECT * FROM student WHERE roll_no = " + req.params.id,
    async(err, result) =>{
      if (err){
        return res.status(404).json({ error: "No Profile Found" });
      } else{
        return res.status(200).json(result);
      }
    }
  );
});

app.listen(3000);
