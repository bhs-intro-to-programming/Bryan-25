/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.
const fireAlarm = (fA, sD, pFD) => {
  return fA || sD || pFD;
};
const canBePresident = (pA, nBC, lUS) => {
  return pA >= 35 && nBC == true && lUS >= 14;
};
const willSeeTweet = (fT, fRT, bOT) => {
  return fT && !bOT || fRT && !bOT;
};
const evenGreaterThanZero = (number) => {
  return number > 0 && number % 2 == 0;
};
const isLeapYear = (year) => {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};