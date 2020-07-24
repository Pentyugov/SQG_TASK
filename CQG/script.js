var canvas = document.getElementById("canvas");
var contextGLobal = canvas.getContext('2d');

document.getElementById("draw_btn").addEventListener("click", function(){

    var figures = document.getElementById("console").value.split("\n");
    var matchRect = /^rectangle/img;
    var matchCircle = /^circle/img;
    var matchLine = /^line/img;
    var matchTriangle = /^triangle/img;
    var matchEllipse = /^ellipse/img;
    
    for (var i = 0; i < Object.keys(figures).length; i++) {
        if(matchRect.test(figures[i])) {
            drawRect(figures[i]);
        }else if (matchCircle.test(figures[i])) {
           drawCircle(figures[i]);
        }else if (matchLine.test(figures[i])) {
            drawLine(figures[i]);
        }else if (matchTriangle.test(figures[i])) {
           drawTriangle(figures[i]);
        }else if (matchEllipse.test(figures[i])) {
            drawEllipse(figures[i]);
        }
    }
});

function drawRect(figure) {
    // FIND POSITION, INIT POSITION COORDINATES
        var position = findCoordinates(figure);
        var startPosX = position[0];
        var startPosY = position[1];
        var finishPosX = position[2];
        var finishPosY = position[3];
        var width = finishPosX - startPosX;
        var height = finishPosY - startPosY;

    // FIND STROKE COLOR, INIT RGB VARIABLES
        var strokeColorRGB = findStrokeColor(figure);
        var strokeColorRed = strokeColorRGB[0];
        var strokeColorGreen = strokeColorRGB[1];
        var strokeColorBlue = strokeColorRGB[2];

    // FIND BACKGROUND COLOR, INIT RGBA VARIABLES    
        var backgroundColorRGBA = findBackgroundColor(figure);
        var backgroundColorRed = backgroundColorRGBA[0];
        var backgroundColorGreen = backgroundColorRGBA[1];
        var backgroundColorBlue = backgroundColorRGBA[2];
        var backgroundAlpha = backgroundColorRGBA[3];

    // CHECK PARAMS
        if (checkDimensions(position)) {
            if(checkColor(strokeColorRGB)) {
                if (checkColor(backgroundColorRGBA)) {
                        // DRAW RECTANGLE
                        contextGLobal.strokeStyle = `rgb(${strokeColorRed}, ${strokeColorGreen}, ${strokeColorBlue}`;
                        contextGLobal.fillStyle = `rgba(${backgroundColorRed}, ${backgroundColorGreen}, ${backgroundColorBlue}, ${backgroundAlpha})`;
                        contextGLobal.rect(startPosX, startPosY, width, height);
                        contextGLobal.stroke();
                        contextGLobal.fill();
                } else alert("Incorrect -b in <RECTANGLE>");
            } else alert("Incorrect -c in <RECTANGLE>");
        } else alert("Incorrect -p in <RECTANGLE>");
}


function drawLine(figure) {

    //FIND COORDINATES, INIT POSITION COORDIANTES
    var position = findCoordinates(figure);
    var startPosX = position[0];
    var startPosY = position[1];
    var finishPosX = position[2];
    var finishPosY = position[3];
    
    //FIND COLOR, INIT COLOR VARIABLES
    var strokeColorRGB = findStrokeColor(figure);
    var strokeColorRed = strokeColorRGB[0];
    var strokeColorGreen = strokeColorRGB[1];
    var strokeColorBlue = strokeColorRGB[2];

    if(checkDimensions(position)) {
        if(checkColor(strokeColorRGB)) {
            //DRAW LINE
            contextGLobal.strokeStyle = `rgb(${strokeColorRed}, ${strokeColorGreen}, ${strokeColorBlue})`;
            contextGLobal.beginPath();
            contextGLobal.moveTo(startPosX, startPosY);
            contextGLobal.lineTo(finishPosX, finishPosY);
            contextGLobal.stroke();
            contextGLobal.closePath();
        }else alert("Incorrect -c in <LINE>");
    } else alert("Incorrect -p in <LINE>");
} 

function drawTriangle(figure) {

    //FIND COORDINATES, INIT COORDINATES
    var position = findCoordinates(figure);
    var vertexOneX = position[0];
    var vertexOneY = position[1];
    var vertexTwoX = position[2];
    var vertexTwoY = position[3];
    var vertexThreeX = position[4];
    var vertexThreeY = position[5];
    
    //FIND STROKE COLOR, INIT STROKE COLOR VARIABLES
    var strokeColorRGB = findStrokeColor(figure);
    var strokeColorRed = strokeColorRGB[0];
    var strokeColorGreen = strokeColorRGB[1];
    var strokeColorBlue = strokeColorRGB[2];

    //FIND BACKGROUND COLOR, INIT BACKGROUND COLOR VARIABLES
    var backgroundColorRGBA = findBackgroundColor(figure);
    var backgroundColorRed = backgroundColorRGBA[0];
    var backgroundColorGreen = backgroundColorRGBA[1];
    var backgroundColorBlue = backgroundColorRGBA[2];
    var backgroundAlpha = backgroundColorRGBA[3];

    if (checkDimensions(position)) {
        if(checkColor(strokeColorRGB)) {
            if (checkColor(backgroundColorRGBA)) {
                    // DRAW RECTANGLE
                    contextGLobal.strokeStyle = `rgb(${strokeColorRed}, ${strokeColorGreen}, ${strokeColorBlue}`;
                    contextGLobal.fillStyle = `rgba(${backgroundColorRed}, ${backgroundColorGreen}, ${backgroundColorBlue}, ${backgroundAlpha})`;
                    contextGLobal.beginPath();
                    contextGLobal.moveTo(vertexOneX, vertexOneY);
                    contextGLobal.lineTo(vertexTwoX, vertexTwoY);
                    contextGLobal.lineTo(vertexThreeX, vertexThreeY);
                    contextGLobal.closePath();
                    contextGLobal.stroke();
                    contextGLobal.fill();

            } else alert("Incorrect -b in <TRIANGLE>");
        } else alert("Incorrect -c in <TRIANGLE>");
    } else alert("Incorrect -p in <TRIANGLE>");
}

function drawCircle(figure) {

    // FIND CIRCLE CENTER AND RADIUS, INIT THEM
    var position = findCoordinates(figure);
    var radius = findRadius(figure);
    var circleCenterX = position[0];
    var circleCenterY = position[1];

    
    // FIND STROKE COLOR, INIT RGB VARIABLES
    var strokeColorRGB = findStrokeColor(figure);
    var strokeColorRed = strokeColorRGB[0];
    var strokeColorGreen = strokeColorRGB[1];
    var strokeColorBlue = strokeColorRGB[2];

    // FIND BACKGROUND COLOR, INIT RGBA VARIABLES    
    var backgroundColorRGBA = findBackgroundColor(figure);
    var backgroundColorRed = backgroundColorRGBA[0];
    var backgroundColorGreen = backgroundColorRGBA[1];
    var backgroundColorBlue = backgroundColorRGBA[2];
    var backgroundAlpha = backgroundColorRGBA[3];

    if(checkDimensions(position)) {
        if(checkRadius(position, radius)) {
            if (checkColor(strokeColorRGB)) {
                if(checkColor(backgroundColorRGBA)) {
                    // DRAW CIRCLE
                    contextGLobal.strokeStyle = `rgb(${strokeColorRed}, ${strokeColorGreen}, ${strokeColorBlue}`;
                    contextGLobal.fillStyle = `rgba(${backgroundColorRed}, ${backgroundColorGreen}, ${backgroundColorBlue}, ${backgroundAlpha})`;
                    contextGLobal.beginPath();
                    contextGLobal.arc(circleCenterX, circleCenterY, radius, 0, 2 * Math.PI, false);
                    contextGLobal.closePath();
                    contextGLobal.stroke();
                    contextGLobal.fill(); 
                }else alert("Incorrect -b in <CIRCLE>");
            }else alert("Incorrect -c in <CIRCLE>");
        }else alert("Incorrect -r in <CIRCLE>");
    } else alert("Incorrect -p in <CIRCLE>");

}

function drawEllipse(figure) {

    var position = findCoordinates(figure);
    var ellipseCenterX = position[0];
    var ellipseCenterY = position[1];
    var radiuses = findEllipseRadius(figure);
    var r1 = radiuses[0];
    var r2 = radiuses[1];
    
    // FIND STROKE COLOR, INIT RGB VARIABLES
    var strokeColorRGB = findStrokeColor(figure);
    var strokeColorRed = strokeColorRGB[0];
    var strokeColorGreen = strokeColorRGB[1];
    var strokeColorBlue = strokeColorRGB[2];

    // FIND BACKGROUND COLOR, INIT RGBA VARIABLES    
    var backgroundColorRGBA = findBackgroundColor(figure);
    var backgroundColorRed = backgroundColorRGBA[0];
    var backgroundColorGreen = backgroundColorRGBA[1];
    var backgroundColorBlue = backgroundColorRGBA[2];
    var backgroundAlpha = backgroundColorRGBA[3];


    if(checkDimensions(position)) {
            if (checkColor(strokeColorRGB)) {
                if(checkColor(backgroundColorRGBA)) {
                    // DRAW CIRCLE
                    contextGLobal.strokeStyle = `rgb(${strokeColorRed}, ${strokeColorGreen}, ${strokeColorBlue}`;
                    contextGLobal.fillStyle = `rgba(${backgroundColorRed}, ${backgroundColorGreen}, ${backgroundColorBlue}, ${backgroundAlpha})`;
                    contextGLobal.beginPath();
                    contextGLobal.ellipse(ellipseCenterX, ellipseCenterY, r1, r2, 0 * Math.PI/180, 0, 2 * Math.PI);
                    contextGLobal.closePath();
                    contextGLobal.stroke();
                    contextGLobal.fill(); 
                }else alert("Incorrect -b in <CIRCLE>");
            }else alert("Incorrect -c in <CIRCLE>");
    } else alert("Incorrect -p in <CIRCLE>");
                    


    // alert("ELLIPSE");
    // contextGLobal.beginPath();
    // contextGLobal.ellipse(75, 75, 50, 25, 0 * Math.PI/180, 0, 2 * Math.PI);
    // contextGLobal.stroke();
}

function checkDimensions(position) {
    var checked = false;
    var checkedDimensions = 0;
    for(var i = 0; i < Object.keys(position).length; i ++) {
        if(i%2 == 0) {
            if(position[i] <= canvas.width) {
                checkedDimensions ++;
            }
        } else {
            if(position[i] <= canvas.height) {
                checkedDimensions ++;
            }
        }
    }
    if(checkedDimensions == Object.keys(position).length){
        checked = true;
    }
    return checked;
}

function checkRadius(position, radius) {
    
    var checked = false;
    var checkedDimensions = 0;
    for(var i = 0; i < Object.keys(position).length; i ++) {
        if(i%2 == 0) {
            if ((+position[i] + (+radius[0])) <= canvas.width && ((+position[i] - (+radius[0])) >=0)) {
                checkedDimensions++;
            }
        } else {
            if ((+position[i] + (+radius[0])) <= canvas.height && ((+position[i] - (+radius[0])) >=0)) {
                checkedDimensions ++;
            }
        }
    }
    if(checkedDimensions >= Object.keys(position).length){
        checked = true;
    }
    return checked;
}

function checkColor(color) {
    var checked = false;
    var checkedComponents = 0;

    if(Object.keys(color).length == 3) {
        for(var i = 0; i < Object.keys(color).length; i ++) {
            if(color[i] >= 0 && color[i] <= 255) {
                checkedComponents ++;
            }
        }
        if(checkedComponents >= Object.keys(color).length) {
            checked = true;
        }
    }

    if (Object.keys(color).length == 4){
        var alpha = color[3];

        for(var j = 0; j < Object.keys(color).length - 1; j ++) {
            if(color[j] >= 0 && color[j] <= 255) {
                checkedComponents ++;  
            }
        }
        if (+alpha >=0 && +alpha <= 1) {       
            checkedComponents ++;
        }
        if(checkedComponents >= Object.keys(color).length) {
            checked = true;
        }
    }
    return checked;
}

function findCoordinates(figure) {
    var tempPos = figure.match(/(?<=\[)(.*)(?=\])/ig);
    var position = tempPos[0].match(/\d+/ig);
    return position;
}

function findStrokeColor(figure) {
    var tempColor = figure.match(/(?<=-c)(.*?)(?=\))/i);
    var color;
    if (tempColor != null) {
        color = tempColor[0].match(/\d+/ig);
    } else {
        color = [0, 0, 0];
    }
    return color;
}

function findBackgroundColor(figure) {
    var tempBackgroundColor = figure.match(/(?<=-b)(.*?)(?=\))/i);
    var color;
    if (tempBackgroundColor != null) {
        var tempColor = tempBackgroundColor[0].match(/\d+/ig);
        if(Object.keys(tempColor).length == 4) {
            color = [tempColor[0], tempColor[1], tempColor[2], tempColor[3]];
        } else if (Object.keys(tempColor).length == 5) {
            color = [tempColor[0], tempColor[1], tempColor[2], tempColor[3] + "." + tempColor[4]];
        } else if (tempColor[3] == null) {
            color = [tempColor[0], tempColor[1], tempColor[2], 1];
        }
    } else {
        color = [0, 0, 0, 0];
    }
    return color;
}

function findRadius(figure) {
    
    var tempRadius = figure.match(/(?<=-r)(.*?)(?=\])/i);
    var radius = tempRadius[0].match(/\d+/i);
    return radius;
}

function findEllipseRadius(figure) {
    var tempR1 = figure.match(/(?<=-r1)(.*?)(?=])/i);
    var tempR2 = figure.match(/(?<=-r2)(.*?)(?=])/i);
    var r1 = tempR1[0].match(/\d+/i);
    var r2 = tempR2[0].match(/\d+/i);
    var radiuses = [r1, r2];
    return radiuses;
 }

/*

line -p [50, 50] [100, 100] -c rgb(255, 0, 0)
rectangle -p [70, 300] [400, 400] -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3) 
triangle -p [400, 200] [400, 500] [500, 500] -c rgb(0, 0, 255) -b rgba(255, 255, 0, 0.3)
circle -p [200, 400] -r [100] -c rgb(255, 0, 0) -b rgba(0, 255, 0, 0.3)
ellipse -p [75, 75] -r1 [50] -r2 [25] -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)

rectangle -p [50, 50] [100, 100] -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3) 
triangle -p [50, 50] [50, 100] [100, 100] -c rgb(0, 0, 255) -b rgba(255, 0, 0, 0.3)
circle -p [75, 75] -r 25 -c rgb(255, 0, 0) -b rgba(0, 255, 0, 0.3)
ellipse -p [75, 75] -r1 50 -r2 25 -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)

*/
