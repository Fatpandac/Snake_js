import { random } from "./utils.js";

const SNAKE_COLOR = 34;
const FEED_COLOR = 31;
const WIDTH = process.stdout.columns / 2 - 1;
const HEIGHT = process.stdout.rows - 1;
const KEY_DIRECTIO_NMAP = {
  "w": [-1, 0],
  "s": [1, 0],
  "a": [0, -2],
  "d": [0, 2],
  "up": [-1, 0],
  "down": [1, 0],
  "left": [0, -2],
  "right": [0, 2],
};
const snake = [
  [12, 22],
  [12, 26],
  [12, 24],
];

const isGameOver = false;

const directionEventQueue = [];
const direction = [0, 2];

const score = 0;

const feed = [random(HEIGHT), random(WIDTH) * 2];

export default {
  KEY_DIRECTIO_NMAP,
  SNAKE_COLOR,
  FEED_COLOR,
  HEIGHT,
  WIDTH,
  isGameOver,
  snake,
  direction,
  directionEventQueue,
  score,
  feed,
};
