// Help: http://diveintohtml5.info/canvas.html
// http://stackoverflow.com/questions/7812514/drawing-a-dot-on-html5-canvas
// http://www.sitepoint.com/html5-canvas-draw-bezier-curves/
$(function () {
    console.log("ready!");

    var width = 800;
    var hight = 500;

    var nMax = 20;
    var mMax = 500;

    var controlerPoints = [
        {
            x: 400,
            y: 490
        },
        {
            x: 790,
            y: 490
        },
        {
            x: 400,
            y: 10
        },
        {
            x: 10,
            y: 490
        },
        {
            x: 400,
            y: 490
        }
    ];

    var lines = [];

    main();

    //////////////////////////////////////////////

    function main() {
        var context = initialize_canvas();
        var points = get_ctrl_points();

        // Number of control points
        var n = points.length - 1;

        // Number of individual lines
        var m = 100;

        for (var i = 0; i <= m; i++) {
            curve_points(n, i / m, lines, points);
        }

        console.log('Lines: ', lines);

        plot_connecting_line(lines, context);

        plot_ctrl_points(n, points, context);
    }

    function plot_connecting_line(lines, context) {
        //console.log(lines);
        for (var i = 0; i < lines.length - 1; i++) {
            line(lines[i].x, lines[i].y, lines[i + 1].x, lines[i + 1].y, context);
        }
    }

    function round(x) {
        return Math.round(x);
    }

    function get_ctrl_points() {
        return controlerPoints;
    }

    function blending_value(n, i, u) {

        var tri = new coefs(n + 1).display();
        var c = tri[tri.length - 1];

        var bv = c[i];;

        for(var m=1; m<=i; m++)
        {
            bv = bv*u;
        }

        for(var m=1; m<=n-i; m++)
        {
            bv = bv*(1-u);
        }

        return bv;


        /*var sum = 0;


        for ( var j = 0; j <= n; j++)
        {
            sum = sum + c[j] * Math.pow(u, j) * Math.pow(1-u, n-j);
        }

        console.log('Sum: ', sum);
        return sum;*/
    }

    function curve_points(n, u, lines, points) {
        var bv;
        var x = 0;
        var y = 0;

        for (var i = 0; i <= n; i++) {
            bv = blending_value(n, i, u);
            x = round(x + bv * points[i].x);
            y = round(y + bv * points[i].y);

            console.log('Curve_points: n, u, bv, x, y', n, u, bv, x, y);
        }

        lines.push({
            x: x,
            y: y
        });

        //console.log(points);
    }

    function initialize_canvas() {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        context.save();
        context.fillStyle = "#eeeeee";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.restore();

        return context;
    }

    function plot_ctrl_points(n, points, context) {
        var numberOfPoints = n > points.length ? points.length : n;
        for (var i = numberOfPoints; i > 0; i--) {
            //console.log(points[i - 1]);
            point(points[i - 1].x, points[i - 1].y, context);
            text(i, points[i - 1].x, points[i - 1].y, context);
        }
    }

    function text(text, x, y, context) {
        context.save();
        context.fillStyle = '#ffffff';
        context.font = "bold 12px sans-serif";
        context.fillText(text, x - 3.5, y + 4);
        context.restore();
    }

    function point(x, y, context) {
        context.save();
        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI, true);
        context.fill();
        context.restore();
    }

    function line(x1, y1, x2, y2, context) {
        context.save();
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.restore();
    }

    function coefs(rows) {

        // Number of rows the triangle contains
        this.rows = rows;

        // The 2D array holding the rows of the triangle
        this.triangle = new Array();

        // Method to print the triangle
        this.display = function (base) {
            if (!base)
                base = 10;

            for (var r = 0; r < rows; r++) {
                this.triangle[r] = new Array();
                for (var i = 0; i <= r; i++) {
                    if (i == 0 || i == r)
                        this.triangle[r][i] = 1;
                    else
                        this.triangle[r][i] = this.triangle[r - 1][i - 1] + this.triangle[r - 1][i];
                }
            }

            return this.triangle;
        }
    }
});