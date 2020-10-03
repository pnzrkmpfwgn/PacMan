import {DIRECTIONS, OBJECT_TYPE} from './setup';

//Primitve random movement
export function randomMovement(position, direction, objectExist) {
  let dir = direction;
  let nextMovePos = position + dir.movement;

  //create an array from directions object keys
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExist(nextMovePos, OBJECT_TYPE.WALL) ||
    objectExist(nextMovePos, OBJECT_TYPE.GHOST)
  ) {
    //Get a random key
    const key = keys[Math.floor(Math.random() * keys.length)];
    //Set the next move
    dir = DIRECTIONS[key];
    //Set the next move
    nextMovePos = position + dir.movement;
  }

  return {nextMovePos, direction: dir};
}
