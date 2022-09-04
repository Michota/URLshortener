// select HTML elements
const linkEl = document.getElementById("URLbox"),
  shortBtnEl = document.getElementById("shortButton"),
  shortenedLinkEl = document.getElementById("shortenedLink"),
  shortenedLink3El = document.getElementById("shortenedLink3"),
  originalLinkEl = document.getElementById("originalLink"),
  resultsEl = document.getElementById("results");

// Variables for storing original and shortened links
let originalLink = undefined,
  shortenedLink = undefined,
  shortenedLink3 = undefined,
  fullshortenedLink = undefined,
  fullshortenedLink3 = undefined;

// button clicking
shortBtnEl.addEventListener("click", function () {
  originalLink = linkEl.value;
  linkShortenerAPI(originalLink);
});

const linkShortenerAPI = function (longLink) {
  fetch(`https://api.shrtco.de/v2/shorten?url=${longLink}`).then((res) => {
    if (res.ok) {
      console.log("SUCCES - links were shortened!");
      res.json().then((data) => getLinks(data));
    } else {
      console.log("Something went wrong...");
    }
  });
};

// Get links from API and save them in previosuly defined variables
const getLinks = function (data) {
  originalLink = data.result.original_link;
  shortenedLink = data.result.short_link;
  shortenedLink3 = data.result.short_link3;
  fullshortenedLink = data.result.full_short_link;
  fullshortenedLink3 = data.result.full_short_link3;
  // console.log(`Short Link: ${fullshortenedLink}, Original Link: ${originalLink}`);
  pageUpdate();
};

// Update visible links
const pageUpdate = function () {
  resultsEl.classList.remove("hidden");
  // Change displayed text after generating short links
  shortenedLinkEl.textContent = `
  ${shortenedLink}`;
  shortenedLink3El.textContent = `
  ${shortenedLink3}`;
  originalLinkEl.textContent = `${originalLink}`;
};

// Copy link to clipboard
const copyText = function (clickedElement) {
  let copiedLink = clickedElement.textContent;
  console.log(copiedLink);
  navigator.clipboard.writeText(copiedLink);
};
