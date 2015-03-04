// Help: http://diveintohtml5.info/canvas.html
// http://stackoverflow.com/questions/7812514/drawing-a-dot-on-html5-canvas
// http://www.sitepoint.com/html5-canvas-draw-bezier-curves/
$(function () {
    console.log("ready!");

    var width = 800;
    var hight = 500;

    var nMax = 20;
    var mMax = 500;

    var controlPoint;

    var c = [];

    var x = [];
    var y = [];

    main();

    //////////////////////////////////////////////

    function main() {
        var context = initialize_canvas();

        var controlPoints = get_ctrl_points();
        var points = get_ctrl_points();
        var n = points.length + 1;
        var m = 4;

        var tri = new coefs(n + 1).display();
        var c = tri[tri.length - 1];
        console.log("C: ", c);

        for (var i = 0; i <= m; i++) {
            curve_points(n, i / m, points[i]);
        }

        plot_ctrl_points(n, controlPoints, context);

        plot_connecting_line(x, y, m);
    }

    function plot_connecting_line(x, y, m) {
        for (var i = 0; i < m; i++) {
            line(x[i], y[i], x[i + 1], y[i + 1]);
        }
    }

    function round(x) {
        return Math.round(x);
    }

    function get_ctrl_points() {
        return [
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
    }

    function blending_value(n, i, u) {
        // write code to compute the blending value
        var value = c[i] * 1 - u;
        console.log('Blanding_Value: ', value);
        return value;
    }

    function curve_points(n, u, points) {
        var bv;
        //x = 0;
        //y = 0;

        for (var i = 0; i <= n; i++) {
            console.log('Curve_points: n, u, bv, x, y: ', n, u, points.x, points.y);
            //bv = blending_value(n, i, u);
            //x = round(x + bv * points.x);
            //y = round(y + bv * points.y);
        }
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
            console.log(points[i - 1]);
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