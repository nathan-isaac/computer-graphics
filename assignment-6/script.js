$(function() {
    console.log( "ready!" );

    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var context = canvas.getContext("2d");
    console.log(context);

    var width = 800;
    var hight = 500;
    var depth = 4;
    var roughness = 0.01;
    var triangles = [];
    var areas = [];

    /*var grays = [
        '303030',
        '454545',
        '595959',
        '6E6E6E',
        '838383',
        '989898',
        'ACACAC',
        'C1C1C1',
        'D6D6D6',
        'EAEAEA'
    ];*/

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

    function storeTriangle(x1, y1, x2, y2, x3, y3) {

        //console.log("area", getArea(x1, y1, x2, y2, x3, y3));

        //areas.push(getArea(x1, y1, x2, y2, x3, y3))

        triangles.push({
            area: Math.round(getArea(x1, y1, x2, y2, x3, y3)),
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            x3: x3,
            y3: y3
        });
    }

    function drawTriangle(x1, y1, x2, y2, x3, y3)
    {
        var area = Math.round(getArea(x1, y1, x2, y2, x3, y3));

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.closePath();
        context.stroke();
        //context.fillStyle = float2color(area / 1000);
        //context.fill();
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getArea(x1, y1, x2, y2, x3, y3)
    {
        return (Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))) / 2;
        //var vi = width * 2 + hight * 2;
        //return vi + (vb / 2) - 1;
    }

    function dec2hex(dec) {
        return Number(parseInt( dec , 10)).toString(16);
    }

    function float2color( percentage ) {
        var color_part_dec = 255 * percentage;
        var color_part_hex = Number(parseInt( color_part_dec , 10)).toString(16);
        return "#" + color_part_hex + color_part_hex + color_part_hex;
    }

    function main()
    {
        drawTriangles(400, 50, 750, 450, 50, 450, 1);

        //var max = Math.max.apply(Math, areas);
        //var min = Math.min.apply(Math, areas);

        //angular.forEach(triangles, function(value, key) {
        //
        //    console.log('Hex:', value.area / 100000);
        //    console.log('Hex:', float2color(value.area / 100000));
        //    //console.log('String Length', );
        //    drawTriangle(value.x1, value.y1, value.x2, value.y2, value.x3, value.y3, float2color(value.area / 1000));
        //})
    }

    main();
});

