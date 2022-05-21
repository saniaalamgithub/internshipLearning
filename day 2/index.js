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
  var studentInfoInsertion =
  "INSERT INTO student (id,name,roll_no,address,section) VALUES ('01', 'layla','1','narayangonj','A'),('02', 'sania','2','narayangonj','A'),('03', 'sinthy','3','narayangonj','A'),('04', 'sinji','4','narayangonj','A'),('05', 'ahona','5','narayangonj','A')";


app.get("/create", function (req, res) {
    con.query(studentTableCreateQuery, function (err, result) {
        if (err) throw err;
        console.log("Student created");
      });
});
app.get("/add",function(req,res){
    con.query(studentInfoInsertion,function(err,result){
        if(err)throw err;
        console.log("info inserted");

    })
})
app.get("/add/:name",function(req,res){
    let xyz = "INSERT INTO student (id,name,roll_no,address,section) VALUES ('07', '"+req.params.name+"','7','narayangonj','B')"
    con.query(xyz,function(err,result){
        if(err)throw err;
    })
})
app.get("/")

app.listen(3000);