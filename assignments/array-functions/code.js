const countTens = (numeros) => {
  let ten = 0
  for (let i = 0; i < numeros.length + 1; i++) {
    if (numeros[i] == 10) {
      ten = ten + 1
    }
  };
  return;
};