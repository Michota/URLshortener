// select elements
const linkEl = document.getElementById("URLbox"),
  shortBtnEl = document.getElementById("shortButton"),
  shortenedLinkEl = document.getElementById("shortenedLink");

// long link entered by user in input box
let typedLink = undefined;

// button clicking
shortBtnEl.addEventListener("click", function () {
  typedLink = linkEl.value;
  linkShortener(longLink);
});

const linkShortener = function (longLink) {
  fetch(`https://api.shrtco.de/v2/shorten${typedLink}}`).then();
};
