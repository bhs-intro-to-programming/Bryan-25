const upToX = (s) => {
  return s.substring(0,s.indexOf('x'))
};

const charactersAround = (s, index) => {
  return s.substring(index-1,index)+s.substring(index+1,index+2)
};

const middle = (s) => {
  return s.substring(s/4)
};