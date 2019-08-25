let isCursorVisible: boolean = true;
let cursorBlinkSpeed: number = 530;

let currentCaption: string = "web developer";

let captionLength: number = 0;
const captionArray: string[] = [
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
let currentCaptionArray: string[] = captionArray.slice(1);
// console.log(captionArray);
// console.log(currentCaptionArray);
let captionSpeed: number = 100;
let resetSpeed: number = 4000;
let index: number = 0;

const htmlTypedText: HTMLSpanElement = document.getElementById("typed-text");
const htmlCursor: HTMLSpanElement = document.getElementById("cursor");

const cursorBlink: number = setInterval(() => {
  if (isCursorVisible) {
    htmlCursor.style.opacity = "0";
    isCursorVisible = !isCursorVisible;
  } else {
    htmlCursor.style.opacity = "1";
    isCursorVisible = !isCursorVisible;
  }
}, cursorBlinkSpeed);

const type = (): void => {
  if (index < currentCaption.length) {
    htmlTypedText.innerHTML += currentCaption.charAt(index);
    index++;
    setTimeout(type, captionSpeed);
  }
};

const randomArrayItem = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)];
};

const changeCaption: number = setInterval((): void => {
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

//img swapping functions
const pokedexDiv: HTMLElement = document.getElementById("pokedex-img");

const switchImg = (image: string, website: string): void => {
  if (website === "pokedex") {
    pokedexDiv.style.backgroundImage = `url(${image})`;
  }
};
