const AbstractDrawer = require('../gls/abstract-drawer')

class CanvasDrawer extends AbstractDrawer {
  constructor(canvas) {
    super()
    this.canvas = canvas
    this.context = canvas.getContext('2d')
  }

  drawPoint(point, color = 'black', width = 1) {
    this.context.beginPath()
    this.context.strokeStyle = color
    this.context.lineWidth = width
    this.context.arc(point[0], point[1], 1, 0, 2 * Math.PI, true)
    this.context.stroke()
  }

  drawLine(pointA, pointB, color = 'black', width = 1) {
    this.context.beginPath()
    this.context.strokeStyle = color
    this.context.lineWidth = width
    this.context.moveTo(pointA[0], pointA[1])
    this.context.lineTo(pointB[0], pointB[1])
    this.context.stroke()
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

module.exports = CanvasDrawer
