const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
const port = 3001;

let cords = [];

app.get('/getcords', (req, res) => {
    console.log("lol");
    res.send(cords);
})

app.get('/updatecords', (req, res) => {
    var cordsh = req.header('cords');
    cordsh = cordsh.split(',');
    cords.push(cordsh);
    console.log(cords);
    res.send(cords);
})

app.listen(3001, () => {
    console.log("MInecraft 2 is up on " + port + ": http://localhost:" + port);
})