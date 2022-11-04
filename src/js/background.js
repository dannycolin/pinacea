import { getContent } from "/js/utils.js";

let matches = getContent();
let filter = {
  urls: matches.matches
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  browser.tabs.update(tabId, { "pinned": true });
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
