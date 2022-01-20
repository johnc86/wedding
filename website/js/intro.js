


var introTime = 3000;

const timer = ms => new Promise(res => setTimeout(res, ms))

async function addPaint () { // We need to wrap the loop into an async function for this to work
    var numOfPaints = 250;
    
    // The size of plottable area, the 500 is roughly the size of each asset to ensure the edges get covered
    var winh = window.innerHeight + 500;
    var winw = window.innerWidth + 500;
    
    for(var i = 0; i < numOfPaints; i++) {
        // add an image
        var randimg = (Math.floor(Math.random() * 15)) + 1;
        var randcol = (Math.floor(Math.random() * 4));
        var paintcol;
        if (randcol == 0) {
            paintcol = "white";
        }
        else {
            paintcol = "wedgblue"
        }

        var img = document.createElement("img");
        img.src = "../img/" + paintcol + "/element" + randimg + ".png";
        // img.src = "../img/" + paintcol + "/element" + 15 + ".png";
        img.classList.add('paint');
        var src = document.getElementById("cssintro");
        src.appendChild(img);

        // Randomise the width and height placement
        var randh = Math.floor(Math.random() * winh);
        var randw = Math.floor(Math.random() * winw);
    
        // position x and y
        // paint[i].style.left = (randw - 250) + "px";
        // paint[i].style.top = (randh - 250) + "px";
        img.style.left = (randw - 250) + "px";
        img.style.top = (randh - 250) + "px";
    
        // Random rotation
        var randr = Math.floor(Math.random() * 360);
        // paint[i].style.transform = "rotate(" + randr + ")";
        img.style.transform = "rotate(" + randr + ")";

        // lower opacity for white
        if (paintcol == "white") {
            img.style.opacity = "0.5"; 
        }
    
        await timer(introTime/numOfPaints);
    }
}

addPaint();
