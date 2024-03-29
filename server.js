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
app.use(express.static('DrawBoard'));
app.use(express.static('NotFound'));
app.use(express.static('Podcast'));

app.use(express.static('Podcast/Site'));


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/BedMC-WEB/index.html')
})

app.get('/nhie', (req, res) =>{
    res.send("lol");
    const posts = post.findMany({
        select:{
            postContent: true
        }
    });
})

app.get('/drawboard', (req, res) =>{
    res.sendFile(__dirname + '/DrawBoard/index.html')
})

app.get('/podcast', (req, res) =>{
    res.sendFile(__dirname + '/Podcast/Site/podcast-site.html')
})

app.get('/podcast/rss', (req, res) =>{
    res.sendFile(__dirname + '/Podcast/rss.xml')
})

app.get('/podcast/episode000', (req, res) =>{
    res.sendFile(__dirname + '/Podcast/AudioData/podcast#00-spotify.mp3')
})

app.get('/podcast/episode001', (req, res) =>{
    res.sendFile(__dirname + '/Podcast/AudioData/podcast#01-spotify.mp3')
})

app.get('/*', (req, res) =>{
    res.sendFile(__dirname + "/NotFound/index.html")
})

app.listen(3001, () => {
    console.log("MInecraft 2 is up on " + port + ": http://localhost:" + port);
})