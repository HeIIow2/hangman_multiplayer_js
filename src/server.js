const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}...`));

app.use(express.static(path.join(__dirname, 'public')))

var players = []
var currentId = 0


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function choose_work(playerList) {
    var chooser = "choose"
    var asker = "ask"
    var worker = getRandomInt(0, playerList.length - 1)

    for (let i=0; i<playerList.length; i++){
        element = playerList[i]
        if(i == worker){
            playerList[i]["role"] = chooser
        } else {
            playerList[i]["role"] = asker
        }
    }

    return playerList
}


io.on('connection', socket => {
    console.log("new connection");

    socket.on('playerName', newPlayer => {
        console.log(newPlayer);

        socket.emit("playerId", currentId.toString());
        players.push({'id': currentId.toString(), "name": newPlayer, "points": 0, "role": ""})
        if(players.length >= 2) {
            players = choose_work(players)
        }
        currentId += 1;

        console.log(players);
        io.emit("refreshPlayers", players);
    });
});
