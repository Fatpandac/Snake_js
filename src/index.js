import { controllerInit } from "./control.js";
import { updateData } from "./update.js";
import { renderData } from "./render.js";
import { sleep } from "./utils.js";

async function main() {
  controllerInit();

  while (true) {
    renderData();

    updateData();

    await sleep(100);
  }
}

main();
