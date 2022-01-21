function checkLanguage() {
    if (typeof(Storage) !== "undefined") {
        var locale = localStorage.getItem("lang");
        if (locale) {
            window.location.href = "/" + locale;
        }
        else {
            //
            //  This is where we can disable autodetect...
            //
            // var browserLang = null;
            var browserLang = navigator.language || navigator.userLanguage; 
            if (browserLang == "en-GB") {
                saveLang('en');
            }
            else if (browserLang == "pl") {
                saveLang('pl');
            }
            else {
                showFlags();
                return;
            }
            checkLanguage();
        }
    }
    else {
        showFlags();
    }
}

function saveLang(lang) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('lang', lang);
        console.log("locale = en");
        checkLanguage();
    }
}

function showFlags() {
    var mjlogo = document.getElementById("mjlogo");
    mjlogo.style.animation = "fadeout 2s 1 forwards";
    var flags = document.getElementById("flags");
    flags.style.animation = "fadein 2s 1 forwards";
}