// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (nP, nI) => {
  return nI % nP;
};
const areaOfCircle = (radius) => {
  return Math.PI * (radius ** 2);
};
const volumeOfCube = (edge) => {
  return;
};
const populationGrowth = (cP, gP) => {
  return cP * gP;
};
const earnedRunAverage = (eR, pI) => {
  return (eR / pI) * 9;
};
const valueOfJewels = (nD, nE, dG, eG) => {
  return (nD * dG) + (nE * eG);
};
const payWithOvertime = (hW, hR, oR) => {
  return ;
};
const weightOnJupiter = (eW) => {
  return eW * (JUPITER_GRAVITY / EARTH_GRAVITY);
};
const gravity = (m1, m2, pD) => {
  return ((m1 * m2)/pD ** 2) * G;
};