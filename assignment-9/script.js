
// Help: http://diveintohtml5.info/canvas.html
// http://stackoverflow.com/questions/7812514/drawing-a-dot-on-html5-canvas
// http://www.sitepoint.com/html5-canvas-draw-bezier-curves/
$(function() {
    console.log( "ready!" );

    var width = 800;
    var hight = 500;

    // Green 4
    // Red 4
    // Orange 11
    // Purple 9

    var green1 = [
        {
            x: 100,
            y: 400
        },
        {
            x: 600,
            y: 400
        },
        {
            x: 600,
            y: 350
        },
        {
            x: 600,
            y: 300
        }
    ];

    main();

    //////////////////////////////////////////////

    function main()
    {
        console.log(green1);

        var context = initialize_canvas();

        for (var i = green1.length - 1; i >= 0; i--)
        {
            console.log(i);
            console.log(green1[i]);
            line(green1[i].x, green1[i].y, green1[i - 1].x, green1[i - 1].y, context, '#00FF00');
        }
    }

    function initialize_canvas()
    {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        context.save();
        context.fillStyle = "#eeeeee";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.restore();

        return context;
    }

    function text(text, x, y, context)
    {
        context.save();
        context.fillStyle = '#ffffff';
        context.font = "bold 12px sans-serif";
        context.fillText(text, x - 3.5, y + 4);
        context.restore();
    }

    function point(x, y, context)
    {
        context.save();
        context.beginPath();
        context.arc(x, y, 10, 0, 2 * Math.PI, true);
        context.fill();
        context.restore();
    }

    function line(x1, y1, x2, y2, context, color)
    {
        var color = color || "#000000";
        context.save();
        context.beginPath();
        context.strokeStyle = color;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.restore();
    }
    
});