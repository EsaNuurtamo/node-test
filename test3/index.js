const assert = require("chai").assert;

const positions = [
  { a: ["C", 2], b: ["D", 4], canAttack: true },
  { a: ["F", 7], b: ["E", 5], canAttack: true },
  { a: ["C", 2], b: ["A", 1], canAttack: true },
  { a: ["A", 6], b: ["B", 4], canAttack: true },
  { a: ["A", 6], b: ["B", 5] },
  { a: ["C", 2], b: ["C", 2] },
  { a: ["A", -1], b: ["B", 1] },
  { a: ["D", 4], b: ["E", 5] },
];

//convert the position to number coordinates
const positionToCoordinates = ([column, row]) => {
  const letterToNumber = {
    'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7
  }
  return [letterToNumber[column], row]
}

// implement this method to test if two knights threaten eachother
const canAttack = (a, b) => {
  const first = positionToCoordinates(a)
  const second = positionToCoordinates(b)

  //if letter is not a valid row return false
  if(first[0] === undefined || second[0] === undefined) return false;

  //if column is not valid number return false
  if(first[1] < 0 || first[1] > 7 || second[1] < 0 || second[1] > 7) return false;

  //if the knight can reach the other position it can attack 
  if(Math.abs(first[0] - second[0]) === 2 && Math.abs(first[1] - second[1]) === 1){
    return true;
  }
  if(Math.abs(first[0] - second[0]) === 1 && Math.abs(first[1] - second[1]) === 2){
    return true;
  }

  //otherwise kinght cannot reach the other position so it cannot attack
  return false;
};

positions.forEach((test) => {
  try {
    assert.equal(canAttack(test.a, test.b), !!test.canAttack);
  } catch (e) {
    console.error("FAILED", test);
  }
});
