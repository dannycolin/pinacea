async function getFilter() {
  let filter = await browser.storage.local.get();

  return filter.matches;
}

async function handleUpdated(tabId, changeInfo, tabInfo) {
  let filter = await getFilter();

  if (!filter) {
    return;
  }

  for (let url of filter) {
    let regex = new RegExp(url, "gi");
    if (tabInfo.url.match(regex)) {
      browser.tabs.update(tabId, {
        pinned: true
      });
    }
  }
}
browser.tabs.onUpdated.addListener(handleUpdated);

async function togglePinTab() {
  const currentTab = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });

  return await browser.tabs.update({
    pinned: !currentTab[0].pinned
  });
}

async function handleCommand(command) {
  switch (command) {
    case "toggle-pin-tab":
      togglePinTab();
      break;
    default:
      console.log("Unexcepted error");
  }
}
browser.commands.onCommand.addListener(handleCommand);
