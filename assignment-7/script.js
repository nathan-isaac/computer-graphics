$(function() {
    console.log( "ready!" );

    var times = 500000;

    var width = 800;
    var height = 500;

    var sierpinskiTriangle = [
        {
            a: 0.5,
            b: 0,
            c: 0,
            d: 0.5,
            e: 1,
            f: 1,
            p: 0.33
        },
        {
            a: 0.5,
            b: 0,
            c: 0,
            d: 0.5,
            e: 1,
            f: 150,
            p: 0.33
        },
        {
            a: 0.5,
            b: 0,
            c: 0,
            d: 0.5,
            e: 150,
            f: 150,
            p: 0.34
        }
    ];

    var square = [
        {
            a: 0.5,
            b: 0,
            c: 0,
            d: 0.5,
            e: 1,
            f: 1,
            p: 0.25
        },
        {
            a: 0.5,
            b: 0,
            c: 0,
            d: 0.5,
            e: 150,
            f: 1,
            p: 0.25
        },
        {
            a: 0.5,
            b: 0,
            c: 0,
            d: 0.5,
            e: 1,
            f: 150,
            p: 0.25
        },
        {
            a: 0.5,
            b: 0,
            c: 0,
            d: 0.5,
            e: 150,
            f: 150,
            p: 0.25
        }
    ];

    var fern = [
        {
            a: 0,
            b: 0,
            c: 0,
            d: 0.16,
            e: 0,
            f: 0,
            p: 0.01
        },
        {
            a: 0.85,
            b: 0,
            c: 0.04,
            d: 0.85,
            e: 0,
            f: 70,
            p: 0.85
        },
        {
            a: 0.2,
            b: 0.26,
            c: -0.23,
            d: 0.22,
            e: 0,
            f: 70,
            p: 0.07
        },
        {
            a: 0.15,
            b: -0.28,
            c: 0.26,
            d: 0.24,
            e: 0,
            f: 19,
            p: 0.07
        }
    ];

    var tree = [
        {
            a: 0,
            b: 0,
            c: 0,
            d: 0.5,
            e: 0,
            f: 0,
            p: 0.05
        },
        {
            a: 0.42,
            b: -0.42,
            c: 0.42,
            d: 0.42,
            e: 0,
            f: 200,
            p: 0.40
        },
        {
            a: 0.42,
            b: 0.42,
            c: -0.42,
            d: 0.42,
            e: 0,
            f: 200,
            p: 0.40
        },
        {
            a: 0.1,
            b: 0,
            c: 0,
            d: 0.1,
            e: 0,
            f: 200,
            p: 0.15
        }
    ];

    main();

    ///////////////////////////////////////

    function main()
    {
        buildTriangel();
        buildSquare();
        buildFern();
        buildTree();
    }

    function between(x, min, max) {
        return x >= min && x <= max;
    }

    function plot(context, x, y)
    {
        //context.beginPath();
        //context.moveTo(x, y);
        //context.lineTo(x, y);
        //context.closePath();

        context.fillStyle = "#000000";
        context.fillRect(x, y, 1, 1);
    }

    function uni()
    {
        //var random = Math.round(Math.random()*100)/100;
        //console.log('Random: ', random);
        return Math.round(Math.random()*100)/100;
    }

    function buildTree()
    {
        var canvas = document.getElementById("canvas1");
        var context = canvas.getContext("2d");

        context.fillStyle = "#eeeeee";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var ifs = tree;

        var xOld = 0;
        var yOld = 0;

        var xNew = 0;
        var yNew = 0;

        var matrixIndex;

        for(var i = times; i > 0; i --)
        {

            var randomNumber = uni();

            if(randomNumber <= 0.40)
            {
                matrixIndex = 2 - 1;
            }
            else if(randomNumber <= 0.80)
            {
                matrixIndex = 3 - 1;
            }
            else if(randomNumber <= 0.95)
            {
                matrixIndex = 4 - 1;
            }
            else
            {
                matrixIndex = 1 - 1;
            }

            xNew = Math.round(ifs[matrixIndex].a * xOld + ifs[matrixIndex].c * yOld + ifs[matrixIndex].e);
            yNew = Math.round(ifs[matrixIndex].b * xOld + ifs[matrixIndex].d * yOld + ifs[matrixIndex].f);

            //console.log("X, Y: ", xNew, yNew);

            plot(context, xNew + 400, (yNew * -1) + height);

            xOld = xNew;
            yOld = yNew;

        }
    }

    function buildFern()
    {
        var canvas = document.getElementById("canvas2");
        var context = canvas.getContext("2d");

        context.fillStyle = "#eeeeee";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var ifs = fern;

        var xOld = 0;
        var yOld = 0;

        var xNew = 0;
        var yNew = 0;

        var matrixIndex;

        for(var i = times; i > 0; i --)
        {

            var randomNumber = uni();

            if(randomNumber <= 0.85)
            {
                matrixIndex = 2 - 1;
            }
            else if(randomNumber <= 0.92)
            {
                matrixIndex = 3 - 1;
            }
            else if(randomNumber <= 0.99)
            {
                matrixIndex = 4 - 1;
            }
            else
            {
                matrixIndex = 1 - 1;
            }

            xNew = Math.round(ifs[matrixIndex].a * xOld + ifs[matrixIndex].c * yOld + ifs[matrixIndex].e);
            yNew = Math.round(ifs[matrixIndex].b * xOld + ifs[matrixIndex].d * yOld + ifs[matrixIndex].f);

            //console.log("X, Y: ", xNew, yNew);

            plot(context, xNew + 400, (yNew * -1) + height);

            xOld = xNew;
            yOld = yNew;

        }
    }

    function buildSquare()
    {
        var canvas = document.getElementById("canvas3");
        var context = canvas.getContext("2d");

        context.fillStyle = "#eeeeee";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var ifs = square;

        var xOld = 0;
        var yOld = 0;

        var xNew = 0;
        var yNew = 0;

        var matrixIndex;

        for(var i = times+500000; i > 0; i --)
        {

            var randomNumber = uni();

            if(randomNumber <= 0.25)
            {
                matrixIndex = 2 - 1;
            }
            else if(randomNumber <= 0.50)
            {
                matrixIndex = 3 - 1;
            }
            else if(randomNumber <= 0.75)
            {
                matrixIndex = 4 - 1;
            }
            else
            {
                matrixIndex = 1 - 1;
            }

            xNew = Math.round(ifs[matrixIndex].a * xOld + ifs[matrixIndex].c * yOld + ifs[matrixIndex].e);
            yNew = Math.round(ifs[matrixIndex].b * xOld + ifs[matrixIndex].d * yOld + ifs[matrixIndex].f);

            //console.log("X, Y: ", xNew, yNew);

            plot(context, xNew + 400, (yNew * -1) + height);

            xOld = xNew;
            yOld = yNew;

        }
    }

    function buildTriangel()
    {
        var canvas = document.getElementById("canvas4");
        var context = canvas.getContext("2d");

        context.fillStyle = "#eeeeee";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var ifs = sierpinskiTriangle;

        var xOld = 0;
        var yOld = 0;

        var xNew = 0;
        var yNew = 0;

        var matrixIndex;

        for(var i = times; i > 0; i --)
        {

            var randomNumber = uni();

            if(randomNumber <= 0.34)
            {
                matrixIndex = 3 - 1;
            }
            else if(randomNumber <= 0.67)
            {
                matrixIndex = 2 - 1;
            }
            else
            {
                matrixIndex = 1 - 1;
            }

            xNew = Math.round(ifs[matrixIndex].a * xOld + ifs[matrixIndex].c * yOld + ifs[matrixIndex].e);
            yNew = Math.round(ifs[matrixIndex].b * xOld + ifs[matrixIndex].d * yOld + ifs[matrixIndex].f);

            //console.log("X, Y: ", xNew, yNew);

            plot(context, xNew + 400, (yNew * -1) + height);

            xOld = xNew;
            yOld = yNew;

        }
    }
});

