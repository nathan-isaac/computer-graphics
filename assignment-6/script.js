$(function() {
    console.log( "ready!" );

    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var context = canvas.getContext("2d");
    console.log(context);

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

    function main()
    {

    }

    main();
});

