const save = document.getElementById("save");
const textarea = document.getElementById("matches");

async function getFilter() {
  let matches = await browser.storage.local.get();

  if (matches.matches) {
    matches = matches.matches.join("\n");
    textarea.value = matches;
    console.log("Loaded.");
  }
}
getFilter();

save.addEventListener('click', (event) => {
  let matches = document.getElementById("matches").value;
  matches = matches.trim().split(/\n/);
  browser.storage.local.set({ matches });
  console.log("Saved.");
});

