/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 
const lineOfCircles = (radius) => {
  const diameter = 2 * radius
  const dist = Math.floor(width / diameter) * diameter
  const extra = width - dist
  let x = 0
  while (x < width - extra) {
    drawFilledCircle(x + radius + extra / 2, height / 2, radius, 'red')
    x += diameter
  }
}

lineOfCircles(10);
let radius = 20
let roy = 0
let color = 'red'
const diameter = 2 * radius
const dist = Math.floor(width / diameter) * diameter
const extra = width - dist
let x = 0
while (x < width - extra) {
  drawFilledCircle(x + radius + extra / 2, height / 2, radius, color)
  x += diameter
  roy = roy + 1
  if (roy %2 == 0) {
    color = 'red'
  }
  if (roy %2 == 1) {
    color ='blue'
  }
}
*/

const dartBoard = (score) => {
  let color = 'red'; let roy = 0; let factor = height / 2;
  drawFilledCircle(width / 2, height / 2, height / 2, color);
  for (let i = 0; i < score + 1; i++) {
    drawFilledCircle(width / 2, height / 2, factor, color);
    if (roy % 2 == 0) {
      color = 'blue';
    }
    if (roy % 2 == 1) {
      color = 'red';
    }
    roy = roy + 1
    factor = height / 2 - ((height / 2) / score * c)
  }

}
dartBoard(20)