
    var canvas = document.getElementById('myCanvas');
    canvas.width = 320;
    canvas.height = 320;

    // canvas dimensions = MAP
    var w = canvas.width;
    var h = canvas.height;

    // GRID
    var radius = w/16;

    // PORTAL
    var portalWidth = w/10;
    var portalHeight = w/10;

    var ctx = canvas.getContext('2d');

    // global text controls
    ctx.font = '100% sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // global line width
    ctx.lineWidth = 1;


function drawPaths() {

    // First path
    ctx.beginPath();
    ctx.strokeStyle = 'turquoise';
    // start path
    ctx.moveTo((w/2),0);
    // end path
    ctx.lineTo((w/2),(h/2));
    ctx.stroke();


    // Second path
    ctx.beginPath();
    ctx.strokeStyle = 'turquoise';
    // start path
    ctx.moveTo((w/2),(h/2));
    // end path
    ctx.lineTo(0,h);
    ctx.stroke();


    // Third path
    ctx.beginPath();
    ctx.strokeStyle = 'turquoise';
    // start path
    ctx.moveTo((w/2),(h/2));
    // end path
    ctx.lineTo(w,h);
    ctx.stroke();
}

function drawGrids() {

    ctx.fillStyle = 'white';

    // grid 1
    ctx.beginPath();
    ctx.arc((w/2), (h/2), radius, 0, 2 * Math.PI, false);
    ctx.fill();

    // grid 2
    ctx.beginPath();
    ctx.arc((w/2), 0, radius, 0, 2 * Math.PI, false);
    ctx.fill();

    // grid 3
    ctx.beginPath();
    ctx.arc(w, h, radius, 0, 2 * Math.PI, false);
    ctx.fill();

    // grid 4
    ctx.beginPath();
    ctx.arc(0, h, radius, 0, 2 * Math.PI, false);
    ctx.fill();

}

function drawGridNumbers() {

    ctx.fillStyle = 'black';

    // grid 1
    ctx.fillText('1', (w/2), (h/2));

    // grid 2
    ctx.fillText('2', (w/2), 0);

    // grid 3
    ctx.fillText('3', w, h);

    // grid 4
    ctx.fillText('4', 0, h);

}

function drawPortals() {

    // grid 1
    ctx.fillStyle = '#47A591';
    ctx.fillRect(((w/2)-(portalWidth/2)), ((h/3)-(portalHeight/2)), portalWidth, portalHeight);

    // grid 2
    ctx.fillStyle = '#8578A2';
    ctx.fillRect(((w-(w/3)-(portalWidth/2))), ((h-(h/3))-(portalHeight/2)), portalWidth, portalHeight);

    // grid 3
    ctx.fillStyle = '#4BB419';
    ctx.fillRect(((w/3)-(portalWidth/2)), ((h-(h/3))-(portalHeight/2)), portalWidth, portalHeight);

}

function drawPortalNumbers() {

    ctx.fillStyle = 'white';

    // grid 1
    ctx.fillText('1', ((w/2)), ((h/3)));

    // grid 2
    ctx.fillText('2', (w-(w/3)), (h-(h/3)));

    // grid 3
    ctx.fillText('3', (w/3), (h-(h/3)));

}

// this draws a grid, for dev purposes
function drawGuides() {

    ctx.strokeStyle = 'grey';
    ctx.setLineDash([2]);

    // 1/3 vert
    ctx.beginPath();
    ctx.moveTo((w/3), 0);
    ctx.lineTo((w/3),(h));
    ctx.stroke();

    // 2/3 vert
    ctx.beginPath();
    ctx.moveTo((w-(w/3)), 0);
    ctx.lineTo((w-(w/3)), h);
    ctx.stroke();

    // 1/3 horz
    ctx.beginPath();
    ctx.moveTo(0, (h/3));
    ctx.lineTo(w, (h/3));
    ctx.stroke();

    // 2/3 horz
    ctx.beginPath();
    ctx.moveTo(0, (h-(h/3)));
    ctx.lineTo(w, (h-(h/3)));
    ctx.stroke();

}




// check for canvas support, and run functions

if (canvas.getContext) {

    drawPaths();
    drawGuides();
    drawGrids();
    drawGridNumbers();
    drawPortals();
    drawPortalNumbers();

} else {
    alert ("Canvas is not supported in this browser")
}