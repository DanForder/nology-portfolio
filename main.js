// let cursor;
// let cursorSpeed = 530;

// setInterval(function() {
//   if (cursor) {
//     document.getElementById("cursor").style.opacity = 0;
//     cursor = false;
//   } else {
//     document.getElementById("cursor").style.opacity = 1;
//     cursor = true;
//   }
// }, cursorSpeed);

// let captionLength = 0;
// let currentCaption = "";
// let captionArray = [
//   // "web developer",
//   "music producer",
//   "ultimate frisbee player",
//   "game designer",
//   "d&d enthusiast",
//   "world explorer",
//   "home chef extraordinaire",
//   "admirer of middle earth",
//   "peanut butter advocate"
// ];
// let captionSpeed = 100;
// let resetSpeed = 4000;
// let i = 0;

// let typedText = document.getElementById("typed-text");

// typedText.innerHTML = currentCaption;

// // functions

// function type() {
//   if (i < currentCaption.length) {
//     typedText.innerHTML += currentCaption.charAt(i);
//     i++;
//     setTimeout(type, captionSpeed);
//   }
// }

// function randomArrayItem(array) {
//   return array[Math.floor(Math.random() * array.length)];
// }

// // start typing with web developer

// currentCaption = "web developer";

// type();

// //type from array

// setInterval(function() {
//   i = 0;
//   typedText.innerHTML = "";
//   currentCaption = randomArrayItem(captionArray);

//   //remove item displayed from array
//   captionArray.splice(captionArray.indexOf(currentCaption), 1);

//   //if array is empty, repopulate
//   if (captionArray.length < 1) {
//     captionArray = [
//       "web developer",
//       "music producer",
//       "ultimate frisbee player",
//       "game designer",
//       "d&d enthusiast",
//       "world explorer",
//       "home chef extraordinaire",
//       "admirer of middle earth",
//       "peanut butter advocate"
//     ];
//   }

//   type();
// }, resetSpeed);
