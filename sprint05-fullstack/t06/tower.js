const Building = require('./Building');

module.exports = class Tower extends Building{
    get hasElevator() {
        return this.elevator
    }
    get arcCapacity() {
        return this._arcCapacity
    }
    get height() {
        return this._height
    }
    set hasElevator(value) {
        if (value === true)
            this.elevator = "+"
        else
            this.elevator = "-"
    }
    set arcCapacity(value) {
        this._arcCapacity = value
    }
    set height(value) {
        this._height = value
    }
    getFloorHeight() {
        return  this._height / this.floors
    }
    toString() {
        return [`Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `Elevator: ${this.elevator}`,
            `Arc reactor capacity: ${this._arcCapacity}`,
            `Height: ${this._height}`,
            `Floor height: ${this.getFloorHeight()}`].join('\n')

    }
}
