
// Help: http://diveintohtml5.info/canvas.html
// http://stackoverflow.com/questions/7812514/drawing-a-dot-on-html5-canvas
// http://www.sitepoint.com/html5-canvas-draw-bezier-curves/
$(function() {
    console.log( "ready!" );

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.save();
    context.fillStyle = "#eeeeee";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.restore();

    var width = 800;
    var hight = 500;

    var nMax = 20;
    var mMax = 500;

    var controlPoint;

    var controlPoints = [
        {
            x: 20,
            y: 48
        },
        {
            x: 230,
            y: 460
        },
        {
            x: 422,
            y: 345
        },
        {
            x: 455,
            y: 432
        },
        {
            x: 120,
            y: 345
        }
    ];

    var c = [];

    var x = [];
    var y = [];

    main();

    //////////////////////////////////////////////

    function main()
    {
        var m;

        //var n = $('.control_points').val();
        var n = 3;

        var points = get_ctrl_points();

        /*coefs(n, c);

        var m = $('.segments').val();

        for ( var i = 0; i <= m; i++)
        {
            curve_points(n, i/m, x[i], y[i]);
        }*/

        //initialize_graph();

        plot_ctrl_points(n, points);

        /*for ( var i = 0; i < m; i++)
        {
            line(x[i], y[i], x[i + 1], y[i + 1]);
        }*/
    }

    function round(x)
    {
        return Math.round(x);
    }

    function get_ctrl_points()
    {
        return controlPoints;
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

    function plot_ctrl_points(n, points)
    {
        for (var i = points.length; i > 0; i--) {
            console.log(points[i-1]);
            point(points[i-1].x, points[i-1].y, context);
            text(i, points[i-1].x, points[i-1].y);
        }
    }

    function text(text, x, y)
    {
        context.save();
        context.fillStyle = '#ffffff';
        context.font = "bold 12px sans-serif";
        context.fillText(text, x - 3.5, y + 4);
        context.restore();
    }

    function point(x, y, context){
        context.save();
        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI, true);
        context.fill();
        context.restore();

    }

    function line(x1, y1, x2, y2) {
        context.save();
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.restore();
    }
    
});

