import { getContent } from "/js/utils.js";

const save = document.getElementById("save");
const textarea = document.getElementById("matches");

let matches = await getContent();
matches = matches.matches.join("\n");
textarea.value = matches;

save.addEventListener('click', (event) => {
  let matches = document.getElementById("matches").value;
  matches = matches.trim().split(/\n/);
  browser.storage.local.set({ matches });
});

