async function getFilter() {
  let filter = await browser.storage.local.get();

  return filter.matches;
}

async function handleUpdated(tabId, changeInfo, tabInfo) {
  let filter = await getFilter();

  for (let url of filter) {
    let regex = new RegExp(url, "gi");
    if (tabInfo.url.match(regex)) {
      //console.debug("Matches!\nFilter: " + url + "\nURL: " + tabInfo.url);
      browser.tabs.update(tabId, {
        pinned: true
      });
    }
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
