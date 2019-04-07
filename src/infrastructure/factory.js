
const Drawer = require('./drawer')
const Generator = require('../generator/generator')
const Gls = require('../gls/gls')

class Factory {
  static drawer(canvas) {
    return new Drawer(canvas)
  }

  gls(data, canvas) {
    const drawer = this.drawer(canvas)
    return new Gls(data, drawer)
  }

  static codeGenerator() {
    return Generator()
  }
}

module.exports = Factory
