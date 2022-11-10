const getX = (object) => {
  return object['x']
}
const point = (object1, object2) => {
  return { 'x': object1, 'y': object2 }
}
const emptyObject = () => {
  return {}
}
const distance = (p1, p2) => {
  return Math.sqrt((p1['x'] - p2['x']) ** 2 + (p1['y'] - p2['y']) ** 2)
}
const midpoint = (p1, p2) => {
  return { x: (p1.x+p2.x)} /2
}