module.exports = class StrFrequency {
    constructor(string) {
        this.string = string
    }
    letterFrequencies() {
        let allowed = /[a-z]/i
        let data = {}
        let letter
        for (let i = 0; i < this.string.length; i++) {
            if (allowed.test(this.string.charAt(i))) {
                letter = this.string.charAt(i).toUpperCase()
                if (data[letter] === undefined) {
                    data[letter] = 0
                }
                data[letter] += 1
            }
        }
        return data
    }
    wordFrequencies() {
        let data = {}
        if (this.string === '') {
            data[this.string] = 1
            return data
        }
        let split = this.string.toUpperCase().split(/[^a-z]/i)
        let allowed = /[a-z]/i
            for (let i in split) {
                if (allowed.test(split[i])) {
                    if (data[split[i]] === undefined)
                        data[split[i]] = 0
                    data[split[i]]++
                }
            }
        return data
    }
    reverseString() {
        return this.string.split('').reverse().join('')
    }
};