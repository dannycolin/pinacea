export async function getContent() {
  let matches = browser.storage.local.get();

  return matches;
}
