/**
 * Created by Nathan on 1/25/2015.
 */

$(function() {
    console.log( "ready!" );

    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var context = canvas.getContext("2d");
    console.log(context);

    //Background
    context.fillStyle = "#eeeeee";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var dimensions = [
        [
            // floor
            {
                x: 565,
                y: 135
            },
            {
                x: 625,
                y: 135
            }
        ],
        [
            // right side
            {
                x: 625,
                y: 135
            },
            {
                x: 625,
                y: 85
            }
        ],
        [
            // left side
            {
                x: 565,
                y: 135
            },
            {
                x: 565,
                y: 85
            }
        ],
        [
            // bottom roof
            {
                x: 565,
                y: 85
            },
            {
                x: 625,
                y: 85
            }
        ],
        [
            // left roof
            {
                x: 595,
                y: 45
            },
            {
                x: 625 + 5,
                y: 85 + 5
            }
        ],
        [
            // right roof
            {
                x: 595,
                y: 45
            },
            {
                x: 565 - 5,
                y: 85 + 5
            }
        ],
    ];

    var house1 = [];
    var house2 = [];
    var house3 = [];
    var house4 = [];

    angular.copy(dimensions, house1);
    angular.copy(dimensions, house2);
    angular.copy(dimensions, house3);
    angular.copy(dimensions, house4);

    plotImage(house1);

    for(var i = house2.length - 1; i >= 0; i--) {
        for(var a = house2[i].length - 1; a >= 0; a--) {
            house2[i][a].x = house2[i][a].x - 525;
        }
    }

    for(var i = house2.length - 1; i >= 0; i--) {
        for(var a = house2[i].length - 1; a >= 0; a--) {
            house2[i][a].x = house2[i][a].x * 2.5;
        }
    }

    plotImage(house2);

    for(var i = house3.length - 1; i >= 0; i--) {
        for(var a = house3[i].length - 1; a >= 0; a--) {
            house3[i][a].x = house3[i][a].x - 525;
            house3[i][a].y = house3[i][a].y + 300;
            console.log('House 3 trans: ', house3[i][a]);
        }
    }

    for(var i = house3.length - 1; i >= 0; i--) {
        for(var a = house3[i].length - 1; a >= 0; a--) {
            house3[i][a].x = house3[i][a].x - 70;
            house3[i][a].y = house3[i][a].y - 400;
            console.log('House 3 trans: ', house3[i][a]);
        }
    }

    var angle = (3 * 3.14) / 4 * -1;

    for(var i = house3.length - 1; i >= 0; i--) {
        for(var a = house3[i].length - 1; a >= 0; a--) {
            house3[i][a].x = Math.cos(angle) * house3[i][a].x - Math.sin(angle) * house3[i][a].y;
            house3[i][a].y = -Math.sin(angle) * house3[i][a].x + Math.cos(angle) * house3[i][a].y;
            console.log('House 3 rotate: ', house3[i][a]);
        }
    }

    for(var i = house3.length - 1; i >= 0; i--) {
        for(var a = house3[i].length - 1; a >= 0; a--) {
            house3[i][a].x = house3[i][a].x + 70;
            house3[i][a].y = house3[i][a].y + 400;
            console.log('House 3 trans: ', house3[i][a]);
        }
    }

    plotImage(house3);

    for(var i = house4.length - 1; i >= 0; i--) {
        for(var a = house4[i].length - 1; a >= 0; a--) {
            house4[i][a].x = house4[i][a].x + 575;
            house4[i][a].y = house4[i][a].y + 300;
            console.log('House 4: ', house4[i][a]);
        }
    }

    for(var i = house4.length - 1; i >= 0; i--) {
        for(var a = house4[i].length - 1; a >= 0; a--) {
            house4[i][a].x = house4[i][a].x - 1.5 * house4[i][a].y;
            console.log('House 4: ', house4[i][a]);
        }
    }

    plotImage(house4);

    function plotImage(dimensions) {
        for(var i = dimensions.length - 1; i >= 0; i--) {
            context.beginPath();
            context.moveTo(dimensions[i][0].x, dimensions[i][0].y);
            context.lineTo(dimensions[i][1].x, dimensions[i][1].y);
            context.stroke();
        }
    }
});