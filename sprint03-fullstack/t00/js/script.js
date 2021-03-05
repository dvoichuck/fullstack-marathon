function houseBlueprint (address, description, owner, size) {
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.date = new Date();
    this._avergeBuildSpeed = 0.5
    this.getDaysToBuild = function () {
        return this.size / this._avergeBuildSpeed
    }
}

function HouseBuilder (address, description, owner, size, roomCount) {
    houseBlueprint.call(this, address, description, owner, size, roomCount)
    this.roomCount = roomCount;
}


const house = new HouseBuilder('88 Crescent Avenue', 'Spacious town house with wood flooring, 2-car garage, and a back patio.', 'J. Smith', 110, 5)


console.log(house.address)
console.log(house.description)
console.log(house.owner)
console.log(house.size)
console.log(house.roomCount)
console.log(house.date.toDateString())
console.log(house._avergeBuildSpeed)
console.log(house.getDaysToBuild())