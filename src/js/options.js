const save = document.getElementById("save");
const textarea = document.getElementById("matches");

async function getContent() {
  let matches = await browser.storage.local.get();
  matches = matches.matches.join("\n");
  textarea.value = matches;
}
getContent();

save.addEventListener('click', (event) => {
  let matches = document.getElementById("matches").value;
  matches = matches.trim().split(/\n/);
  browser.storage.local.set({ matches });
});

