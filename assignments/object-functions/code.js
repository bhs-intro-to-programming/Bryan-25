const getX = (object) => {
  return object['x']
}
const point = (object1, object2) => {
  return { 'x': object1, 'y': object2 }
}
const emptyObject = () => {
  return {}
}
const distance = (x, y) => {
  return Math.sqrt({ x['x'] - y['y'] }** 2 + { x['x'] - y['y'] } ** 2)
}