module.exports = {
  sourceDir: "./src",
  build: {
    overwriteDest: true,
  },
  run: {
    pref: [
      "ui.popup.disable_autohide=true"
    ],
    browserConsole: true
  },
};
