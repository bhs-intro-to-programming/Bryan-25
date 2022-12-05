const upToX = (s) => {
  return s.substring(0,s.indexOf('x'))
};

const charactersAround = (s, index) => {
  return s.substring(0,index)+s.substring(index,s.length)
};