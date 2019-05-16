var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require['fs'];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000, function (){
    console.log("port is runninmg")
});


//stex kapum en mer classery

var grass = require("./Modul/grass.js");
var grasseater = require("./Modul/grasseater.js");
var grasseatereater = require("./Modul/grasseatereater.js");
var supereater = require("./Modul/supereater.js");
var vorsord = require("./Modul/vorsord.js");

//haytararum en zangvacnery

grassArr = [];
grassEaterArr = [];
grassEaterEaterArr = [];
superEaterArr = [];
vorsordArr = [];

//

var w = 50;
var h = 60;

function genMatrix(w, h) {
    var matrix = [];
    for(var y = 0; y < h; y++) {
        matrix[y] = [];
        for(var x = 0; x < w; x++){
            var r = Math.floor(Math.random() * 75);
            if (r < 20) r = 0;
            else if (r < 40) r = 1;
            else if (r < 42) r = 2;
            else if (r < 75) r = 3;
            //else if (r < 100) r = 4;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

//

Random = function (arr) {
    return arr[Math.floor(Math.random() * arr.lenght)];
}

//

matrix = getMatrix(w,h);

//

for (var y = 0; y < matrix.length; y++){
    for (var x = 0; x < matrix[y].length; x++){

        if (matrix[y][x] == 1){
            grassArr.push(new Grass(x, y, 1));
            Grassinit++;
        }
        else if (matrix[y][x == 2]) {
            grassEaterArr.push(new GrassEater(x, y, 2));
            GrassEaterinit++;
        }
        else if (matrix[y][x == 3]) {
            grassEaterEaterArr.push(new GrassEaterEater(x, y, 3));
            GrassEaterEaterinit++;
        }
        else if (matrix[y][x == 4]) {
            superEaterArr.push(new SuperEater(x, y, 4));
            SuperEaterinit++;
        }
        else if (matrix[y][x == 5]) {
            vorsordArr.push(new Vorsord(x, y, 5));
            Vorsordinit++;
        }
    }
}

//

function drawserver() {

    for (var i in grassArr) {
        grassArr[i].mul
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
        //grassEaterArr[i].die();
    }
    for (var i in grassEaterEaterArr) {
        grassEaterEaterArr[i].move();
        grassEaterEaterArr[i].mul();
        //grassEaterEaterArr[i].eat();
        grassEaterEaterArr[i].die();
    }
    for (var i in superEaterArr) {
        superEaterArr[i].move();
        superEaterArr[i].mul();
        superEaterArr[i].eat();
        superEaterArr[i].die();
    }
    for (var i in vorsordArr) {
        vorsordArr[i].move();
        vorsordArr[i].mul();
        vorsordArr[i].eat();
        vorsordArr[i].die();
    }

    io.sockets.emit("matrix", matrix);
}