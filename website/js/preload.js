var loading = {
    start: function() {
        console.log("preloading");
    },
    complete: function() {
        console.log("preloading complete");
        var splash = document.getElementById("loader_splash");
        splash.style.visibility = "hidden";
    }
};
loading.start();



// Preload assets offpage
var target = document.getElementById("loader");

function preloadImage (src) {
    var img = document.createElement("img");
    img.src = src;
    img.style.height = "10px";
    img.style.width = "10px";
    target.appendChild(img);
}

// white images
for(var i = 1; i < 16; i++) {
    preloadImage("../img/white/element" + i + ".png");
}
// blue images
for(var i = 1; i < 16; i++) {
    preloadImage("../img/wedgblue/element" + i + ".png");
}
// backgrounds
if (window.innerWidth > 940) {
    console.log("desktop");
    preloadImage("../img/bg_landscape.png");
}
else {
    preloadImage("../img/bg_portrait.png");
}
preloadImage("../img/smudge1.png");
preloadImage("../img/date_bg.png");
preloadImage("../img/drawing_export.svg");
preloadImage("../img/mappin.svg");
preloadImage("../img/party.jpg");
preloadImage("../img/dance-crop.jpg");
preloadImage("../img/bydgoszcz.png");

