var mysql = require("mysql");
var express = require("express");
var app = express();
app.use(express.json())
var con = mysql.createConnection({
  host: "localhost",
  user: "sania",
  password: "qwert1234@",
  database: "school",
});

app.get("/message", function (req, res) {
  //do whatever

  var studentInfoInsertion =
    "INSERT INTO student (id,name,roll_no,address,section) VALUES ('01', 'layla','1','narayangonj','A'),('02', 'sania','2','narayangonj','A'),('03', 'sinthy','3','narayangonj','A'),('04', 'sinji','4','narayangonj','A'),('05', 'ahona','5','narayangonj','A')";

  con.query(studentInfoInsertion, function (err1, result1) {
    if (err1) throw err1;
    console.log("student 1 added");
  });
});
// "select * from student where name = sania"
// "select * from student where name = 'sania'"
app.get("/student/:name", function (req, res) {
  con.query(
    "select * from student where name='" + req.params.name + "'",
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else if (result.length == 0) {
        res.status(404).send("No student found");
      } else {
        res.status(200).send(result);
      }
    }
  );
});

// app.get("/student", function (req, res) {
//   con.query(
//     "select * from student where name='" + req.query.name + "'",
//     function (err, result) {
//       if (err) {
//         res.status(500).send(err);
//       } else if (result.length == 0) {
//         res.status(404).send("No student found");
//       } else {
//         res.status(200).send(result);
//       }
//     }
//   );
// });

app.get("/student", function (req, res) {
  con.query(
    "select * from student where name='" + req.body.name + "'",
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else if (result.length == 0) {
        res.status(404).send("No student found");
      } else {
        res.status(200).send(result);
      }
    }
  );
});

app.post("/login", function (req, res) {
  con.query(
  // select * from user where email='tusar@gmail.com' and password ='123456' and role='student'
   "select * from user where email='"+req.body.email+"' and password='"+req.body.password+"'" ,
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else if (result.length == 0) {
        res.status(404).send("password mismatch");
      } else {
        res.status(200).send(result);
      }
    }
  );
});

app.listen(3000);
