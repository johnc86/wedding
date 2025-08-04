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


// Dynamically determine base path for subdirectory hosting
var basePath = window.location.pathname.split('/').slice(0, -1).join('/') + '/';
if (basePath === '//') basePath = '/';

// white images
for(var i = 1; i < 16; i++) {
    preloadImage(basePath + "img/white/element" + i + ".png");
}
// blue images
for(var i = 1; i < 16; i++) {
    preloadImage(basePath + "img/wedgblue/element" + i + ".png");
}
// backgrounds
if (window.innerWidth > 940) {
    console.log("desktop");
    preloadImage(basePath + "img/bg_landscape.png");
}
else {
    preloadImage(basePath + "img/bg_portrait.png");
}
preloadImage(basePath + "img/smudge1.png");
preloadImage(basePath + "img/date_bg.png");
preloadImage(basePath + "img/drawing_export.svg");
preloadImage(basePath + "img/mappin.svg");
preloadImage(basePath + "img/party.jpg");
preloadImage(basePath + "img/dance-crop.jpg");
preloadImage(basePath + "img/bydgoszcz.png");

