/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.

const firstHalf = (s) => {
  return s.substring(0, s.length / 2);
};

const secondHalf = (s) => {
  return s.substring(s.length / 2, s.length);
};

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase();
};

const firstFewEveryOther = (s) => {
  return s.substring(0,0)+s.substring(2,2)+s.substring(4,4);
};

const upDownLastCharacter = (s) => {
  return s.toUpperCase(s.length-1,s.length) + s.toLowerCase(s.length-1,s.length);
};