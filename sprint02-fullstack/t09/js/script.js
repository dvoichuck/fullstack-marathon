const date0 = new Date(1993, 11, 1);
const date1= new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00')

console.log(getFormattedDate(date0))
console.log(getFormattedDate(date1))
console.log(getFormattedDate(date2))

function getFormattedDate(dateTime) {
    let dateSplit
    let formattedData
    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let dayShort = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    let dayLong = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    console.log(month)
    console.log(dateTime)
    dateSplit = dateTime.toString().split(' ')
    formattedData = dateSplit[2] + "."
    for (let i = 0; month[i]; i++) {
        if (dateSplit[1].localeCompare(month[i]) === 0) {
            if (i < 9) {
                i += 1
                formattedData += '0' + i + '.'
            }
            else
                formattedData += i + 1 + '.'
            break
        }
    }
    formattedData += dateSplit[3] + ' '

    formattedData += dateSplit[4].substr(0, 5)  + ' '

    for (let i = 0; dayShort[i]; i++) {
        if (dateSplit[0].localeCompare(dayShort[i]) === 0) {
            formattedData += dayLong[i]
        }
    }

    return formattedData

}