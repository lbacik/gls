
const Swarm = require('./swarm')

class Gls
{
    constructor(data, drawer)
    {
        this.data = data
        this.drawer = drawer
        this.initialize()
    }

    getData()
    {
        return this.data
    }

    setData(data)
    {
        this.data = data
    }

    initialize()
    {
        this.swarm = new Swarm(this.data, this.drawer)
    }

    step() {
        this.drawer.clear()
        this.swarm.drawAndCalculateMove()
    }
}

module.exports = Gls
