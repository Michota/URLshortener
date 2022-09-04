// select elements
const linkEl = document.getElementById("URLbox"),
  shortBtnEl = document.getElementById("shortButton"),
  shortenedLinkEl = document.getElementById("shortenedLink"),
  shortenedLink3El = document.getElementById("shortenedLink3"),
  originalLinkEl = document.getElementById("originalLink"),
  resultsEl = document.getElementById("results");
// links
let typedLink = undefined;
let shortLink = undefined;
let shortLink3 = undefined;
let fullShortLink = undefined;
let fullShortLink3 = undefined;

// button clicking
shortBtnEl.addEventListener("click", function () {
  typedLink = linkEl.value;
  linkShortener(typedLink);
});

const linkShortener = function (longLink) {
  fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`).then((res) => {
    if (res.ok) {
      console.log("succes");
      res.json().then((data) => getLinks(data));
    } else {
      console.log("fail");
    }
  });
};

const getLinks = function (data) {
  typedLink = data.result.original_link;
  shortLink = data.result.short_link;
  shortLink3 = data.result.short_link3;
  fullShortLink = data.result.full_short_link;
  fullShortLink3 = data.result.full_short_link3;
  console.log(`Short Link: ${fullShortLink}, Original Link: ${typedLink}`);
  pageUpdate();
};

const pageUpdate = function () {
  resultsEl.classList.remove("hidden");
  // change links
  shortenedLinkEl.href = `${fullShortLink}`;
  shortenedLink3El.href = `${fullShortLink3}`;
  originalLinkEl.href = `${typedLink}`;
  // change displayed links
  shortenedLinkEl.textContent = `
  ${shortLink}`;
  shortenedLink3El.textContent = `
  ${shortLink3}`;
  originalLinkEl.textContent = `${typedLink}`;
};

const copyText = function (clickedElement) {
  let copiedLink = clickedElement.href;
  alert(copiedLink);
};
