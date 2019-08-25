var isCursorVisible = true;
var cursorBlinkSpeed = 530;
var currentCaption = "web developer";
var captionLength = 0;
var captionArray = [
    "web developer",
    "music producer",
    "ultimate frisbee player",
    "game designer",
    "d&d enthusiast",
    "world explorer",
    "home chef extraordinaire",
    "admirer of middle earth",
    "peanut butter advocate"
];
var currentCaptionArray = captionArray.slice(1);
// console.log(captionArray);
// console.log(currentCaptionArray);
var captionSpeed = 100;
var resetSpeed = 4000;
var index = 0;
var htmlTypedText = document.getElementById("typed-text");
var htmlCursor = document.getElementById("cursor");
var cursorBlink = setInterval(function () {
    if (isCursorVisible) {
        htmlCursor.style.opacity = "0";
        isCursorVisible = !isCursorVisible;
    }
    else {
        htmlCursor.style.opacity = "1";
        isCursorVisible = !isCursorVisible;
    }
}, cursorBlinkSpeed);
var type = function () {
    if (index < currentCaption.length) {
        htmlTypedText.innerHTML += currentCaption.charAt(index);
        index++;
        setTimeout(type, captionSpeed);
    }
};
var randomArrayItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};
var changeCaption = setInterval(function () {
    index = 0;
    htmlTypedText.innerHTML = "";
    currentCaption = randomArrayItem(currentCaptionArray);
    //remove item displayed from array
    currentCaptionArray.splice(currentCaptionArray.indexOf(currentCaption), 1);
    //if array is empty, repopulate
    if (currentCaptionArray.length < 1) {
        currentCaptionArray = captionArray.slice();
    }
    type();
}, resetSpeed);
type();
