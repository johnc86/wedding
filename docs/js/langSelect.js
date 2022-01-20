var userLang = navigator.language || navigator.userLanguage; 
// alert ("The language is: " + userLang);
function detectLang() {
    if (userLang == "en-GB") {
        console.log("En detected")
        window.location = "/en/";
    }
    else if (userLang == "pl") {
        console.log("PL detected")
        window.location = "/pl/";
    }
}
setTimeout(detectLang, 5000);
