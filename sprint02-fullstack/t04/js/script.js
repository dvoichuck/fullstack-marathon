let num_1 = +prompt("beginRange", '1')
let num_2 = +prompt("endRange", '100')

checkDivision(num_1, num_2)

function checkDivision(beginRange, endRange) {

    for (beginRange; beginRange <= endRange; beginRange++) {
        let console_string = " -"

        if (beginRange % 2 === 0) {
            console_string = " is even"
        }
        if (beginRange % 3 === 0 && beginRange % 2 !== 0) {
            console_string = " is a multiple of 3"
        }
        else if (beginRange % 3 === 0) {
            console_string = console_string.concat(", a multiple of 3")
        }
        if (beginRange % 10 === 0) {
            console_string = console_string.concat(", a multiple of 10")
        }
    console.log(beginRange + console_string + "\n")
    }
}