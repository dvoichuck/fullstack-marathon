let str = "Giant Spiders?   What’s next? Giant Snakes?"
console.log(str)

String.prototype.removeDuplicate = function removeDuplicate() {
    let correctString = this.replace(/\s+/g, ' ').trim()
    let splitString = correctString.split(' ')

    str = splitString.filter((item, index, arr) => {
        return arr.indexOf(item) === index
    }).join(' ')

    return str
}

console.log(str.removeDuplicate())
