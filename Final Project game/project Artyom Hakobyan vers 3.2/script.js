var matrix = [];
var h = 35;
var w = 42;
var side = 25;
// var grassArr = [];
// var grassEaterArr = [];
// var grassEaterEaterArr = [];
// var superEaterArr = [];
// var vorsordArr = [];


function setup() {
    noStroke();
    frameRate(5);
    createCanvas(w * side, h * side);
    background('#acacac');

    for (var i = 0; i < h; i++) {
        matrix[i] = [];
        for (var k = 0; k < w; k++) {
            matrix[i][k] = Math.round(random([0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,4,5,5,4]));
            //matrix[i][k] = Math.round(random(5));
        }
    }


    

}


