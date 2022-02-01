const express = require("express");
const app = express();
const cors = require('cors');
var fs = require('fs');
const { response } = require("express");
var http = require('http');

app.use(cors());
const port = 3001;

//html tingz
app.use(express.static('BedMC-WEB'));
app.use(__dirname + '/BedMC-WEB', express.static("../BedMC-WEB"))

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

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/BedMC-WEB/index.html')
})

app.listen(3001, () => {
    console.log("MInecraft 2 is up on " + port + ": http://localhost:" + port);
})