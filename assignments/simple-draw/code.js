/*
 * This code is running in an environment with five functions defined:
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *    Draws a line from x1,y1 to x2,y2 using the give color. The fifth argument,
 *    lineWidth, is optional and defaults to 1.
 *
 *  drawCircle(x, y, r, color, lineWidth=1)
 *
 *    Draws a circle centered at x,y with radius r using the given color. The
 *    fith argument, lineWidth, is optional and defaults to 1.
 *
 *  drawRect(x, y, width, height, color, lineWidth=1)
 *
 *    Draws a rectangle starting at x,y with the given width, height, and color.
 *    Positive widths go to the right and negative to the left; positive heights
 *    go down and negative heights go up. The sixth argument, lineWidth, is
 *    optional and defaults to 1.
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *    Draws a filled rectangle starting at x,y with the given width, height, and
 *    color. Positive widths go to the right and negative to the left; positive
 *    heights go down and negative heights go up.
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *    Draws a filled circle centered at x,y with radius r using the given color.
 *
 * There are also a couple variables that might be useful:
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 */
drawLine(0, 600, 500, 0, 'red', 20)

drawLine(0, 600, 0, 0, 'coral', 1000)

drawLine(500, 500, 0, 500, 'yellow',50 )

drawLine(500, 150, 0, 150, 'lightsalmon',50 )

drawLine(500, 100, 0, 100, 'dodgerblue',100 )

drawLine(500, 0, 0, 0, 'royalblue',200 )

drawLine(0, 600, 0, 0, 'black', 20)

drawLine(0, 600, 600, 600, 'black', 20)

drawLine(600, 0, 0, 0, 'black', 20)

drawLine(500, height, 500, 0, 'black', 20)

drawCircle(width/2, height/2, 10, 'blue');

/*drawRect(50, 50, 60, 40, 'black');
*/

drawFilledCircle( 250, 300, 50, 'gold');

drawFilledCircle( 100, 600, 300, 'green');

drawCircle( 100, 600, 300, 'black');

drawFilledCircle( 400, 600, 300, 'forestgreen');

drawCircle( 400, 600, 300, 'black');

drawFilledRect(5, height - 20, 45, 15, 'purple');
