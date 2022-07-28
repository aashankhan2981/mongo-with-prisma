const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use( cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  exposedHeaders:
    "Access-Control-Allow-Method,Access-Control-Allow-Origin,Content-Type,Content-Length",
}));
app.listen(port, function () {  
  console.log("listening on port " + port + "...");
})
app.use(express.json());
app.use(express.urlencoded());
app.get('/', function (req, res) {
  res.json(200,'Welcome')
})
app.use("/user", require("./routes/users.js"));
