$(function() {
    console.log( "ready!" );

    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var context = canvas.getContext("2d");
    console.log(context);

    context.fillStyle = "#eeeeee";
    context.fillRect(0, 0, canvas.width, canvas.height);

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
        var ifs = tree;

        var xOld = 0;
        var yOld = 0;

        var xNew = 0;
        var yNew = 0;

        for(var i = 200000; i > 0; i --)
        {
            var randomNumber = uni();

            if(randomNumber < 0.85)
            {
                var matrixIndex = 2 - 1;
            }
            else if(randomNumber < 0.92)
            {
                var matrixIndex = 3 - 1;
            }
            else if(randomNumber < 0.94)
            {
                var matrixIndex = 2 - 1;
            }
            else
            {
                var matrixIndex = 1 - 1;
            }

            xNew = Math.round(ifs[matrixIndex].a * xOld + ifs[matrixIndex].c * yOld + ifs[matrixIndex].e);
            yNew = Math.round(ifs[matrixIndex].b * xOld + ifs[matrixIndex].d * yOld + ifs[matrixIndex].f);

            console.log("X, Y: ", xNew, yNew);

            plot(xNew + 350, yNew);

            xOld = xNew;
            yOld = yNew;
        }
    }

    function plot(x, y)
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
        return Math.random();
    }

    function probability()
    {

    }

});

