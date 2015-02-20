$(function() {
    console.log( "ready!" );

    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var context = canvas.getContext("2d");
    console.log(context);

    var width = 800;
    var hight = 500;

    var nMax = 20;
    var mMax = 500;

    var controlPoint = [];

    var c = [];

    var x = [];
    var y = [];

    main();

    //////////////////////////////////////////////

    function main()
    {
        var m;

        var n = $('.control_points').val();

        get_ctrl_points(n);

        coefs(n, c);

        var m = $('.segments').val();

        for ( var i = 0; i <= m; i++)
        {
            curve_points(n, i/m, x[i], y[i]);
        }

        initialize_graph();

        plot_ctrl_points(n, ctrlpoint);

        for ( var i = 0; i < m; i++)
        {
            line(x[i], y[i], x[i + 1], y[i + 1]);
        }
    }

    function round(x)
    {
        return Math.round(x);
    }

    function get_ctrl_points(n)
    {
        for ( var i = 0; i <= n; i++)
        {
            controlPoint[i][0];
            controlPoint[i][1];
        }
    }

    function coefs(n, c)
    {
        // write code to compute the coefs
    }

    function blending_value(n, i, u)
    {
        // write code to compute the blending value
    }

    function curve_points(n, u, x, y)
    {
        var bv;
        x = y = 0;

        for ( var i = 0; i<=n; i++)
        {
            bv = blending_value(n, i, u);
            x = round(x+bv*controlPoint[i][0]);
            y = round(y+bv*controlPoint[i][1]);
        }
    }

    function initialize_graph()
    {
        // You know this function
    }

    function plot_ctrl_points(n, ctrlPoint)
    {
        var str = [];
        for ( var k = 0; k <= n; k++)
        {
            itoa(k, str, 10);
            outtexty(ctrlPoint[k][0], controlPoint[k][1], str);
        }
    }
    
});

