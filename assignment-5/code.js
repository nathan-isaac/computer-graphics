// When completed, this code illustrates the use of windows and viewports in scaling
// Wold coordinates to device coordinates via Normalized Device Coordinates.

var Xres = 1015;
var Yres = 760;

var n = 0;

var XW = [];
var YW = [];
var Xd = [];
var Yd = [];

var XWmin;
var XWmax;
var YWmin;
var YWmax;


/**
 * This function gets the user number of, and value
 * of the data in world coordinates to be plotted
 *
 * @param n
 */
function getData(n) {

}


function setWindow(Xmin, Xmax, Ymin, Ymax) {
    XWmin = Xmin;
    XWmax = Xmax;
    YWmin = Ymin;
    YWmax = Ymax;

    // Code for clipping is extra credit.
}

function setViewport(XVmin, XVmax, YVmin, YVmax, n) {
    var S1;
    var S2;

    // Set x and y scaling factors, S1 and S2

    for(var i = 0; i < n; i++) {
        Xd[i] = 0; // Determine the equations for the device coordinates based
        Xd[i] = 0; // On the composition of the transformation matrices for
                    // going from world - to window - to device
    }
}

/**
 * This function plots the data in device coordinates
 * @param n
 */
function graphData(n) {
    for(var i = 0; i < n - 1; i++) {
        drawLine(Xd[i], Yd[i], Xd[i], Yd[i + 1]); // Use a draw lin function from a graphics library.
    }
}


function main()
{
    // Get into graphics mode

    getData(n);
    setWindow(1, n, 300, 700);
    setViewport(0.0, 0.5, 0.5, 1.0, n);
    graphData(n);

    getData(n);
    setWindow(1, n, 10, 100);
    setViewport(0.5, 1.0, 0.5, 1.0, n);
    graphData(n);
}