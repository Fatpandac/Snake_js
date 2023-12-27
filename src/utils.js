export const sleep = async (time) =>
  await new Promise((resolve) => setTimeout(resolve, time));

export const canChangeDirection = (prevDirection, nextDirection) => {
  const directionDotProduct = prevDirection[0] * nextDirection[0] +
    prevDirection[1] * nextDirection[1];

  return (directionDotProduct >= 0);
};

export const random = (max) => {
  return Math.floor(Math.random() * max);
};
