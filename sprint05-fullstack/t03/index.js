function firstUpper(string) {
    if (!string)
        return ""
    let trim = string.toString().trim()
    let lower = trim.slice(1).toLowerCase()
    let upper = trim.charAt(0).toUpperCase()
    return upper + lower
}
module.exports.firstUpper = firstUpper