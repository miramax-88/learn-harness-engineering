const electron = require("electron");
console.log("Electron:", typeof electron);
console.log("Keys:", Object.keys(electron).slice(0, 10));
console.log("App:", electron.app);
console.log("App type:", typeof electron.app);
