const timer = ms => new Promise(res => setTimeout(res, ms))

async function addPaint (introTime) { 
    // We need to wrap the loop into an async function for this to work
    console.log("running intro, for time: " + introTime);

    if (introTime == null) {
        console.log("no time set");
        introTime = 3000;
    }
    var numOfPaints = 250;
    
    // The size of plottable area, the 500 is roughly the size of each asset to ensure the edges get covered
    var winh = window.innerHeight + 500;
    var winw = window.innerWidth + 500;
    
    for(var i = 0; i < numOfPaints; i++) {
        // add an image
        var randimg = (Math.floor(Math.random() * 15)) + 1;
        var randcol = (Math.floor(Math.random() * 8)); // this sets how 'randomly' white appears
        var paintcol;
        if (randcol == 0) {
            paintcol = "white";
        }
        else {
            paintcol = "wedgblue"
        }

        var img = document.createElement("img");
        // img.src = window.location.protocol + "//" + window.location.hostname + "/img/" + paintcol + "/element" + randimg + ".png";
        img.src = "/img/" + paintcol + "/element" + randimg + ".png";
        img.classList.add('paint');
        var src = document.getElementById("cssintro");
        src.appendChild(img);

        // Randomise the size
        // var randh = Math.floor(Math.random() * 500);
        // var randw = Math.floor(Math.random() * 500);
        // // console.log(randh);
        // // console.log(randh);
        // img.style.width = (randw - 250) + "px";
        // img.style.height = (randh - 250) + "px";

        // Randomise the width and height placement
        var randh = Math.floor(Math.random() * winh);
        var randw = Math.floor(Math.random() * winw);
        // position x and y
        img.style.left = (randw - 250) + "px";
        img.style.top = (randh - 250) + "px";
    
        // Random rotation
        var randr = Math.floor(Math.random() * 360);
        img.style.transform = "rotate(" + randr + "deg)";

        // lower opacity for white
        if (paintcol == "white") {
            img.style.opacity = "0.5"; 
        }
    
        await timer(introTime/numOfPaints);
    }
    console.log("loop complete");
}