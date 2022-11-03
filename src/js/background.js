let matches = getContent();
let filter = {
  urls: matches.matches
}

async function getContent() {
  let matches = await browser.storage.local.get();

  return matches;
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  browser.tabs.update(tabId, { "pinned": true });
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
