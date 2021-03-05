let header = ["Name", "Strength", 'Age']
let age = false
let name = false
let strength = false
let text = "Sorting by Name, order: ASC"

const superhero = [
    { name: 'Black Panther', strength: 66, age: 53 },
    { name: 'Capitan America', strength: 79, age: 137 },
    { name: 'Capitan Marvel', strength: 97, age: 26 },
    { name: 'Hulk', strength: 80, age: 49 },
    { name: 'Spider-Man', strength: 78, age: 16 },
    { name: 'Thanos', strength: 78, age: 1000 },
    { name: 'Thor', strength: 95, age: 1000 },
    { name: 'Yon-Rogg', strength: 73, age: 52 },
    { name: 'Iron Man', strength: 88, age: 48 },
]
createTable(superhero)

function createTable (superhero) {
    document.getElementById("notification").innerText = `${text}`
    document.getElementById("placeholder").innerHTML = ''
    let placeholder = document.getElementById("placeholder")
    let table = document.createElement("table")
    placeholder.appendChild(table)
    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr")
        table.appendChild(tr)
        if (i === 0) {
            for (let j = 0; j < 3; j++) {
                let th = document.createElement('th')
                tr.appendChild(th)
                th.setAttribute("onclick", `${header[j]}()`)
                th.appendChild(document.createTextNode(header[j]))
            }
        }
        else {
            add_td(tr, superhero[i - 1].name)
            add_td(tr, superhero[i - 1].strength)
            add_td(tr, superhero[i - 1].age)
        }
    }
}


function add_td(tr, string) {
    let td = document.createElement('td')
    tr.appendChild(td)
    td.appendChild(document.createTextNode(`${string}`))
}

function Age() {
    if (age === true) {
        text = "Sorting by Age, order: DESC"
        createTable(superhero.sort((a, b) => a.age > b.age ? -1 : 1));
        age = false
        name = false
        strength = false

    }
    else {
        text = "Sorting by Age, order: ASC"
        createTable(superhero.sort((a, b) => a.age > b.age ? 1 : -1));
        age = true
        name = false
        strength = false
    }
}

function Name() {
    if (name === true) {
        text = "Sorting by Name, order: DESC"
        createTable(superhero.sort((a, b) => a.name > b.name ? -1 : 1))
        age = false
        name = false
        strength = false
    }
    else {
        text = "Sorting by Name, order: ASC"
        createTable(superhero.sort((a, b) => a.name > b.name ? 1 : -1))
        age = false
        name = true
        strength = false
    }
}

function Strength() {
    if (strength === true) {
        text = "Sorting by Strength, order: DESC"
        createTable(superhero.sort((a, b) => a.strength > b.strength ? -1 : 1))
        age = false
        name = false
        strength = false
    }
    else {
        text = "Sorting by Strength, order: ASC"
        createTable(superhero.sort((a, b) => a.strength > b.strength ? 1 : -1))
        age = false
        name = false
        strength = true
    }
}
