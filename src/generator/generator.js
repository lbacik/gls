const WormData = require('../gls/worm_data')
const Worm = require('../gls/worm')
const AbstractDrawer = require('../gls/abstract_drawer')
const Drawer = require('../infrastructure/canvas-drawer')
const Swarm = require('../gls/swarm')
const Gls = require('../gls/gls')

class Generator {
  static code() {
    let result = '\n'
    result += AbstractDrawer.toString() + '\n'
    result += Drawer.toString() + '\n'
    result += WormData.toString() + '\n'
    result += Worm.toString() + '\n'
    result += Swarm.toString() + '\n'
    result += Gls.toString() + '\n'

    return result
  }
}

module.exports = Generator
