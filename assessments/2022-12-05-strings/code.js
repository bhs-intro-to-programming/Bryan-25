const upToX = (s) => {
  return s.substring(0,s.indexOf('x'))
};

const charactersAround = (s, index) => {
  return s.substring(index-1,index)+s.substring(index,index+1)
};