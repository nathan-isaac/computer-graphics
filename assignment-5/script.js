$(function() {
    console.log( "ready!" );

    var canvas = document.getElementById("canvas");
    console.log(canvas);
    var context = canvas.getContext("2d");
    console.log(context);

    //Background
    context.fillStyle = "#eeeeee";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // When completed, this code illustrates the use of windows and viewports in scaling
    // Wold coordinates to device coordinates via Normalized Device Coordinates.

    var Xres = 800;
    var Yres = 500;

    var n = 0;

    var XW = [
        0, 50, 230, 421, 450, 451, 500, 588, 655, 698, 742, 800
    ];
    var YW = [
        0, 100, 23, 20, 30, 400, 498, 243, 208, 345, 23
    ];

    var Xd = [];
    var Yd = [];

    var XWmin;
    var XWmax;
    var YWmin;
    var YWmax;


    /**
     * This function gets the user number of, and value
     * of the data in world coordinates to be plotted
     */
    function getData() {
        n = 11;
    }


    function setWindow(Xmin, Xmax, Ymin, Ymax) {
        XWmin = Xmin;
        XWmax = Xmax;
        YWmin = Ymin;
        YWmax = Ymax;

        // Code for clipping is extra credit.
    }

    function setViewport(XVmin, XVmax, YVmin, YVmax, n) {
        var S1 = (XVmax - XVmin)/(XWmax - XWmin);
        var S2 = (YVmax - YVmin)/(YWmax - YWmin);

        // Set x and y scaling factors, S1 and S2

        for(var i = 0; i < n; i++) {
            //Xd[i] = XW[i];
            //Yd[i] = Yres - YW[i];

            Xd[i] = XW[i] * (S1 * (XW[i] - XWmin) + XVmin); // Determine the equations for the device coordinates based
            Yd[i] = Yres - YW[i] * (S2 * (YW[i] - YWmin) + YVmin); // On the composition of the transformation matrices for
            // going from world - to window - to device

            //console.log('Set View Port: ', S1, S2, Xd[i], Yd[i], Xd[i]);
        }
    }

    /**
     * This function plots the data in device coordinates
     * @param n
     */
    function graphData(n) {
        for(var i = 0; i < n - 1; i++) {
            console.log('Graph Data: ', i, n, Xd[i], Yd[i], Xd[i + 1], Yd[i + 1]);
            drawLine(Xd[i], Yd[i], Xd[i + 1], Yd[i + 1]); // Use a draw lin function from a graphics library.
        }
    }

    function drawLine(Xd1, Yd1, Xd2, Yd2) {

        console.log('Draw Line: ', Xd1, Yd1, Xd2, Yd2);

        context.beginPath();
        context.moveTo(Xd1, Yd1);
        context.lineTo(Xd2, Yd2);
        context.stroke();
    }


    function main()
    {
        // Get into graphics mode

        getData();
        //setWindow(1, 400, 1, 500);  // Clip on this window rang in world coordinates.
        setWindow(1, n, 300, 700);  // Clip on this window rang in world coordinates.
        setViewport(0.0, 0.5, 0.5, 1.0, n); // Put in the upper left quadrant
        graphData(n);

        getData();
        //setWindow(1, 400, 1, 500);  // Clip on this window rang in world coordinates.
        setWindow(1, n, 10, 100);
        setViewport(0.5, 1.0, 0.5, 1.0, n); // Put in the upper right quadrant
        graphData(n);
    }

    main();
});