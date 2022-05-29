/**
 * Let's make a game 🕹
 */
type Position = {
  x: number;
  y: number;
};

type MoveDirection = "up" | "down" | "left" | "right";

const position: Position = {
  x: 0,
  y: 0,
};

function move(moveDirection: MoveDirection): void {
  switch (moveDirection) {
    case "up":
      position.y++;
      break;
    case "down":
      position.y--;
      break;
    case "left":
      position.x--;
      break;
    case "right":
      position.x++;
      break;
    default:
      throw new Error("error");
  }
  return;
}
console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
