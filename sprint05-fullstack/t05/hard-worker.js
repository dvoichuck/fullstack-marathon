module.exports = class HardWorker {
    get age() {
        return this._age
    }
    get salary() {
        return this._salary
    }
    set age(age) {
        if (age >= 1 && age < 100) {
            this._age = age
        }
    }
    set salary(salary) {
        if (100 <= salary && salary < 10000)
            this._salary = salary
    }
    toObject() {
        return {name: this.name, age: this._age, salary: this._salary}
    }
}