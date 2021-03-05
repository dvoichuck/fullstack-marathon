let Firstname = prompt("input your first name")
let Lastname = prompt("input your last name")

let FirstResult = Firstname.match(/^[a-z]+$/i)
let LastResult = Lastname.match(/^[a-z]+$/i)

if (FirstResult && LastResult) {
    let correctFirst = Firstname.charAt(0).toUpperCase() + Firstname.slice(1).toLowerCase();
    let correctLast = Lastname.charAt(0).toUpperCase() + Lastname.slice(1).toLowerCase();
    console.log("Hello, " + correctFirst + " " + correctLast)
    alert("Hello, " + correctFirst + " " + correctLast)
}
else {
    console.log("Invalid username")
    alert("Invalid username")
}
