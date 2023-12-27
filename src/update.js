import data from "./data.js";
import { canChangeDirection, random } from "./utils.js";

function updatesnakePosition() {
  let direction = data.direction;
  if (data.directionEventQueue.length > 0) {
    const lastDirectionEvent = data.directionEventQueue.shift();

    if (canChangeDirection(lastDirectionEvent, data.direction)) {
      direction = lastDirectionEvent;
      data.direction = lastDirectionEvent;
    }
  }

  const copyFirstNode = data.snake[0];
  data.snake.unshift([
    copyFirstNode[0] + direction[0],
    copyFirstNode[1] + direction[1],
  ]);

  data.directionEventQueue = [];
}

function generateFeed() {
  let newFeed = [];

  while (true) {
    newFeed = [random(data.HEIGHT), random(data.WIDTH) * 2];
    if (
      !data.snake.some((node) =>
        node[0] === newFeed[0] && node[1] === newFeed[1]
      )
    ) break;
  }

  return newFeed;
}

function checkIfSnakeAteFeed() {
  if (data.snake[0][0] === data.feed[0] && data.snake[0][1] === data.feed[1]) {
    data.score++;
    data.feed = generateFeed();
  } else {
    data.snake.pop();
  }
}

function checkIsGameOver() {
  const [snakeHeadY, snakeHeadX] = data.snake[0];

  data.isGameOver = (snakeHeadY < 0 || snakeHeadY > data.HEIGHT) ||
    (snakeHeadX < 0 || snakeHeadX > data.WIDTH * 2) ||
    data.snake.slice(1).some((node) =>
      node[0] === snakeHeadY && node[1] === snakeHeadX
    ) || data.snake.length >= data.WIDTH * data.HEIGHT;
}

export function updateData() {
  updatesnakePosition();
  checkIfSnakeAteFeed();
  checkIsGameOver();
}
