
const Drawer = require('./canvas-drawer')
const Generator = require('../generator/generator')
const Gls = require('../gls/gls')

class Factory {
  drawer(canvas) {
    return new Drawer(canvas)
  }

  gls(data, canvas) {
    const drawer = this.drawer(canvas)
    return new Gls(data, drawer)
  }

  codeGenerator() {
    return Generator
  }
}

module.exports = Factory
