const totalEggs = (hEgg, sEgg) => {
  return hEgg + sEgg
};
const chocolatesPerPerson = (c,p) => {
  return Math.floor(c/p)
};
const extraChocolates = (c,p) => {
  return c%p
};
const leftOut = (c,p) => {
  return p-c
};
const probabilityAllHeads = (flips) => {
  return 0.5**flips
};