$(function() {
    console.log( "ready!" );

    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var context = canvas.getContext("2d");
    console.log(context);

    var width = 800;
    var hight = 500;
    var depth = 1;

    //Background
    context.fillStyle = "#eeeeee";
    context.fillRect(0, 0, canvas.width, canvas.height);

    function drawTriangles(x1, y1, x2, y2, x3, y3, level) {

        if(level <= depth)
        {
            var midx1 = (x1+x2) / 2;
            var midy1 = (y1+y2) / 2;

            var midx2 = (x2+x3) / 2;
            var midy2 = (y2+y3) / 2;

            var midx3 = (x3+x1) / 2;
            var midy3 = (y3+y1) / 2;

            if(level == depth)
            {
                drawTriangle(x1, y1, midx1, midy1, midx3, midy3);
                drawTriangle(midx3, midy3, midx2, midy2, x3, y3);
                drawTriangle(midx3, midy3, midx1, midy1, midx2, midy2);
                drawTriangle(midx1, midy1, x2, y2, midx2, midy2);

                //drawLine(x1, y1, midx1, midy1);
                //drawLine(x1, y1, midx2, midy2);
                //drawLine(x1, y1, midx3, midy3);

                //drawLine(x2, y2, midx1, midy1);
                //drawLine(x2, y2, midx2, midy2);
                //drawLine(x2, y2, midx3, midy3);

                //drawLine(x3, y3, midx1, midy1);
                //drawLine(x3, y3, midx2, midy2);
                //drawLine(x3, y3, midx3, midy3);
            }
            else
            {
                drawTriangles(x1, y1, midx1, midy1, midx3, midy3, level + 1);
                drawTriangles(midx3, midy3, x3, y3, midx2, midy2, level + 1);
                drawTriangles(midx3, midy3, midx1, midy1, midx2, midy2, level + 1);
                drawTriangles(midx1, midy1, midx2, midy2, x2, y2, level + 1);
            }
        }
    }

    function drawLine(x1, y1, x2, y2) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }

    function drawTriangle(x1, y1, x2, y2, x3, y3, color)
    {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.closePath();
        context.stroke();
        //context.fillStyle = "#BA3C3D";
        //context.fill();
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function main()
    {
        drawTriangles(400, 50, 750, 450, 50, 450, 1);
    }

    main();
});

