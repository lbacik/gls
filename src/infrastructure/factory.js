
const Drawer = require('./canvas-drawer')
const Generator = require('../generator/generator')
const Gls = require('../gls/gls')

class Factory {
  static drawer(canvas) {
    return new Drawer(canvas)
  }

  static gls(data, canvas) {
    const drawer = Factory.drawer(canvas)
    return new Gls(data, drawer)
  }

  static codeGenerator() {
    return Generator
  }
}

module.exports = Factory
