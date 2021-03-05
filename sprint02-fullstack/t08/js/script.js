function checkBrackets(str) {
    let countStart = 0
    let countEnd = 0
    let total = 0

    if (!str) {
        return -1
    }
    for (let i = 0; str[i]; i++) {
        if (str[i] === '(') {
            if (countEnd < 0) {
                countEnd--
            }
            else {
                countStart++
            }
            total++
        }
        if (str[i] === ')') {
            if (countStart > 0) {
                countStart--
            }
            else {
                countEnd++
            }
            total++
        }
    }
    if (total === 0 ) {
        return -1
    }
    return countEnd + countStart
}