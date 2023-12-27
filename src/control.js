import data from "./data.js";
import * as readline from "readline";

export function controllerInit() {
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  process.stdin.on("keypress", (_str, key) => {
    if (key.ctrl === true && ["d", "c"].includes(key.name)) {
      process.exit(0);
    }

    if (!Object.keys(data.KEY_DIRECTIO_NMAP).includes(key.name)) return;

    data.directionEventQueue.unshift(data.KEY_DIRECTIO_NMAP[key.name]);
  });
}

