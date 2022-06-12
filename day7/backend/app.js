require("dotenv").config();

var con = require("./config/database");

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors")
app.use(cors())

var jwt = require('jsonwebtoken');

const auth = require("./middlewire/auth");

// Logic goes here
app.post("/login", (req, res) => {
  con.query(
    // select * from user where email='tusar@gmail.com' and password ='123456' and role='student'
    "select * from user where email='" +
      req.body.email +
      "' and password='" +
      req.body.password +
      "'",
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else if (result.length == 0) {
        res.status(404).send("password mismatch");
      } else {
        const token = jwt.sign(
            { email: req.body.email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
        res.status(200).send(token);
      }
    }
  );
});

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌, Sania ");
});

module.exports = app;
