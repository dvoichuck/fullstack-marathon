module.exports.checkDivision = checkDivision;

function checkDivision (start = 1, end = 60) {

    let string
    for (start; start <= end; start++) {
        string = (`The number is ${start} `)
        if (start % 2 === 0 || start % 3 === 0 || start % 10 === 0) {
            if (start % 2 === 0 && start % 3 === 0) {
                string += ("is divisible by 2, is divisible by 3")
            } else if (start % 2 === 0) {
                string += ("is divisible by 2")
            } else if ((start % 3 === 0)) {
                string += ("is divisible by 3")
            }
            if (start % 10 === 0) {
                string += (", is divisible by 10")
            }
        }
        else {
            string += ("-")
        }
        console.log(string)
    }

}
