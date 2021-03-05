class Timer {
    constructor(Title, Delay, StopCount) {
        this.title = Title
        this.delay = Delay
        this.stopCount = StopCount
    }
    start() {
        console.log("Timer " + this.title + " started (delay=" + this.delay + ", stopCount=" + this.stopCount + ")")
        this.stopCount--
    }
    tick() {
        console.log("Timer " + this.title + " Tick! | cycles left " + this.stopCount)
        this.stopCount--
    }
    stop() {
        console.log("Timer " + this.title + " stopped")
    }
}


function runTimer(id, delay, counter) {
    let newTimer = new Timer(id, delay, counter)

    newTimer.start()
    let timeId = setInterval(tick, newTimer.delay)
    function tick () {
        newTimer.tick()
        if (newTimer.stopCount === -1) {
            newTimer.stop()
            clearInterval(timeId)
        }
    }
}

runTimer("Timer", 1000, 5)