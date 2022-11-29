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
const futureHour = (current, future) => {
  return current + future
};
const presentsBudget = (friends,price) => {
  return friends*price
};
const perPresent = (budget, presents) => {
  return budget/presents
};
const wrappingCombos = (numberK,numberR,numberB) => {
  return numberK*numberR*numberB
};
const biggestNumber = (digits) => {
  return 9*10**(digits-1)+9**(digits-1)
};