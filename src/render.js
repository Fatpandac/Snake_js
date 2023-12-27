import { exit } from "process";
import data from "./data.js";

function renderPoint(positiosn, color) {
  const [y, x] = positiosn;

  console.log(`\x1b[${y + 1};${x + 1}H\x1b[0${color}m⬜\x1b[0m`);
}

function renderScore() {
  console.log(`\x1b[1;1H\x1b[035mScore: ${data.score}\x1b[0m`);
}

function rendersnake() {
  data.snake.map((node) => renderPoint(node, data.SNAKE_COLOR));
}

function renderFeed() {
  renderPoint(data.feed, data.FEED_COLOR);
}

export function renderData() {
  console.clear();

  if (!data.isGameOver) {
    rendersnake();
    renderFeed();
    renderScore();
  } else {
    console.log("Game Over");
    exit(0);
  }
}
