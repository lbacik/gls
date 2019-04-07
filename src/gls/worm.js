
const WormData = require('./worm_data')

class Worm {

    constructor(data, drawer) {
        this.data = WormData.validate(data)
        this.head = this.data.head
        this.drawer = drawer
    }

    data(data = null) {
        if (data !== null) {
            this.data = WormData.validate(data)
        }

        return this.data
    }

    getNextPoint(i) {
        const path = this.data.path

        if (this.data.direction === true) {
            i = (i + 1) % path.length
        } else {
            i = Math.abs(path.length - (i + 1)) % path.length
        }

        return path[i]
    }

    choseTheLineThanHeadLiesOn(head) {
        let point = this.data.path[0]
        let next

        for (let i = 0; i <= this.data.path.length; i = i + 1) {

            next = this.getNextPoint(i)

            // console.log('h: ' + head + ', p: ' + point + ', n: ' + next)

            if (head[0] === point[0]) {

                if (this.pointOnLine(point[1], next[1], head[1])) {
                    return [point, next]
                }

            } else if (head[1] === point[1]) {

                if (this.pointOnLine(point[0], next[0], head[0])) {
                    return [point, next]
                }
            }

            point = next;
        }

        return undefined
    }

    choseLineWhichStartsOn(point) {
        let start = this.data.path[0]
        let next

        for (let i = 0; i <= this.data.path.length; i = i + 1) {

            next = this.getNextPoint(i)

            if (start[0] === point[0] && start[1] === point[1]) {
                return [start, next]
            }

            start = next;
        }

        return undefined
    }

    choseLineWhichEndsOn(point) {
        let start = this.data.path[0]
        let next

        for (let i = 0; i <= this.data.path.length; i = i + 1) {

            next = this.getNextPoint(i)

            if (next[0] === point[0] && next[1] === point[1]) {
                return [start, next]
            }

            start = next;
        }

        return undefined
    }

    drawWormLine(startPoint, line, length) {
        let tailDestinationPoint = this.pointOnOppositeEnd(line)
        let dimensionIndex = this.getDimensionIndex(line)
        let lineLength = Math.abs(tailDestinationPoint[dimensionIndex] - startPoint[dimensionIndex])

        if (length < lineLength) {
            if (tailDestinationPoint[dimensionIndex] < startPoint[dimensionIndex]) {
                tailDestinationPoint[dimensionIndex] = startPoint[dimensionIndex] - length
            } else {
                tailDestinationPoint[dimensionIndex] = startPoint[dimensionIndex] + length
            }
            lineLength = length
        }

        this.drawer.drawLine(startPoint, tailDestinationPoint, data.color, data.width)

        return length - lineLength
    }

    drawWorm() {
        let line
        let startPoint = this.head
        let length = this.data.length

        if (this.data.drawHead === true) {
            this.drawer.drawPoint(this.head, this.data.color, this.data.width)
        }

        line = this.choseTheLineThanHeadLiesOn(startPoint)

        // console.log('l: ' + line)

        while ((length = this.drawWormLine(startPoint, line, length)) > 0) {
            startPoint = line[0].slice()
            line = this.choseLineWhichEndsOn(startPoint)

            // console.log('len: ' + length)
            // console.log('sp: ' + startPoint)
            // console.log('ln: ' + line)
        }
    }

    pointOnLine(A, B, H) {
        return A <= H && H <= B || A >= H && H >= B;
    }

    pointOnOppositeEnd(line) {
        return line[0].slice()
    }

    getDimensionIndex(line) {
        if (line[0][0] === line[1][0]) {
            return 1
        }
        return 0
    }

    step() {
        this.getNewHeadPoint()
    }

    newHeadCalculation(head, line, step) {
        let dest = line[1]
        let dimensionIndex = this.getDimensionIndex(line)
        let lineLength = Math.abs(dest[dimensionIndex] - head[dimensionIndex])

        // console.log('line: ' + line)
        // console.log('head: ' + head)
        // console.log('step: ' + step)
        // console.log('dimensionIndex: ' + dimensionIndex)
        // console.log('lineLength: ' + lineLength)

        if (step <= lineLength) {
            if (dest[dimensionIndex] < head[dimensionIndex]) {
                head[dimensionIndex] = head[dimensionIndex] - step
            } else {
                head[dimensionIndex] = head[dimensionIndex] + step
            }
            lineLength = step
        } else {
            head[dimensionIndex] = dest[dimensionIndex]
        }

        // console.log('head: ' + head)

        return step - lineLength
    }

    getNewHeadPoint() {

        // console.log('h: ' + head)
        // console.log('s: ' + step)

        let line = this.choseTheLineThanHeadLiesOn(this.head)

        // console.log('lll: ' + line)

        let i = 1
        let last = false
        let s = this.data.step

        while(last === false) {

            s = this.newHeadCalculation(this.head, line, s)

            if (s === 0) {
                last = true
            } else {
                line = this.choseLineWhichStartsOn(line[1])
            }

            if( ++i > 10) {
                break
            }
        }
    }

    drawPathPoints() {
        for (let key in this.data.path) {
            let point = this.data.path[key]
            this.drawer.drawPoint(point, "red")
        }
    }
}

module.exports = Worm
