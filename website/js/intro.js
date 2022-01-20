console.log("animation start");
var paint = document.getElementsByClassName("paint");

// The size of plottable area, the 500 is roughly the size of each asset to ensure the edges get covered
var winh = window.innerHeight + 500;
var winw = window.innerWidth + 500;

for(var i = 0; i < paint.length; i++) {
    // Randomise the width and height placement
    var randh = Math.floor(Math.random() * winh);
    var randw = Math.floor(Math.random() * winw);

    // position x and y
    paint[i].style.left = (randw - 250) + "px";
    paint[i].style.top = (randh - 250) + "px";

    // Random rotation
    var randr = Math.floor(Math.random() * 360);
    paint[i].style.transform = "rotate(" + randr + ")";

}