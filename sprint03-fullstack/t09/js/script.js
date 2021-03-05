let data = document.getElementsByTagName("input")
let firstname
let lastname
let gender
let age
let key_sleep = false
let key_food = false
let key_fly = false
let key_fight = false
let key_superhero
let human
let superhero

document.getElementById('createBtn').addEventListener("click", () => {
    firstname = data[0].value
    lastname = data[1].value
    firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();
    lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
    gender = data[2].value
    age = data[3].value


    if (firstname && lastname && gender && age) {
        human = new Human(firstname, lastname, gender, age, 600)
        document.getElementById("created").innerHTML = ""
        let hello = "Hello, " + firstname + " " + lastname
        key_sleep = true
        key_food = true
        key_superhero = true
        document.getElementById("created").insertAdjacentHTML('afterbegin', `<h1 id="header">${hello}<small id="text"></small></h1><label><input value="life" type="submit" id="life" class="second"><input value="sleep" type="submit" id="sleep_button" class="second"><input value="food" type="submit" id="food_button" class="second"></label><div id="main_div"><div id="img_div"><img id="img_img" src="https://citaty.info/files/characters/137301.jpeg"></div><div id="text_div"><h3>information</h3><p>Name: ${firstname} ${lastname}</p><p>Gender:${gender}</p><p>Age: ${age}</p><p id="calories">Calories: ${human.calories}</p><p id="sleeping">Sleeping now? no</p><p id="eating">Eating now? no</p><p id="flying">Flying now? no</p><p>Fight now? no</p></div></div><div id="superhero_div"><input type="submit" value="Superhero created" id="superhero"></div>`)
        console.log("created")
        runHunger(human)
        document.getElementById('sleep_button').addEventListener("click", () => {
            if (key_sleep === true) {
                key_sleep = false;
                key_fight = false
                key_food = false;
                key_fly = false
                key_superhero = false
                reset("Yes", "no", "sleeping")
                document.getElementById("img_div").insertAdjacentHTML("afterbegin", `<img id="img_img" src="https://i.gifer.com/fycX.gif">`)
                runSleep(human)
            }
        })
        document.getElementById('food_button').addEventListener("click", () => {
            if (key_food === true) {
                key_sleep = false
                key_food = false
                key_fly = false
                key_fight = false
                key_superhero = false
                reset("no", "Yes", "Nom nom nom!")
                document.getElementById("img_div").insertAdjacentHTML("afterbegin", `<img id="img_img" src="https://i.gifer.com/SwrX.gif">`)
                runEat(human)
            }
        })
        document.getElementById('superhero').addEventListener("click", () => {
            if (human.calories > 500 && key_superhero === true) {
                superhero = new Superhero()
                key_fly = true
                key_fight = true
                document.getElementById("img_div").innerHTML = "";
                document.getElementById('superhero_div').innerHTML = ""
                document.getElementById('superhero_div').insertAdjacentHTML("afterbegin", `<input id="fly" value="fly" type="submit"><input id="fight" value="fight" type="submit">`)
                document.getElementById("img_div").insertAdjacentHTML("afterbegin", `<img id="img_img" src="https://media0.giphy.com/media/lXo8uSnIkaB9e/giphy.gif">`)
                document.getElementById('fly').addEventListener("click", () => {
                    key_food = false
                    key_sleep = false
                    key_fly = false
                    key_fight = false
                    runFly()
                    document.getElementById("img_div").innerHTML = ""
                    reset("no", "no", "flying")
                    document.getElementById("img_div").insertAdjacentHTML("afterbegin", `<img id="img_img" src="https://i.gifer.com/KFvK.gif">`)

                })
                document.getElementById('fight').addEventListener("click", () => {
                    if (key_fight === true) {
                        reset("no", "no", "fighting")
                        document.getElementById("img_div").innerHTML = ""
                        document.getElementById("img_div").insertAdjacentHTML("afterbegin", `<img id="img_img" src="https://thumbs.gfycat.com/ApprehensiveGoodGander-small.gif">`)
                    }
                })
            }
        })
    }
})

function reset(sleeping, eating, text) {
    document.getElementById("sleeping").innerHTML = "";
    document.getElementById("sleeping").insertAdjacentHTML("afterbegin", `Sleeping now? ${sleeping}`);
    document.getElementById("eating").innerHTML = "";
    document.getElementById("eating").insertAdjacentHTML("afterbegin", `Eating now? ${eating}`);
    document.getElementById("img_div").innerHTML = "";
    document.getElementById("header").innerHTML = "";
    document.getElementById("header").insertAdjacentHTML("afterbegin", `${firstname} ${lastname}, <small id="text">${text}</small>`);
}

class Human {
    constructor(firstName, lastName, gender, age, calories) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
        this.calories = calories
        this.timerSleep = 10
        this.timerEat = 5
    }
    sleepStart() {
        document.getElementById("sleeping").innerHTML = "";
        document.getElementById("sleeping").insertAdjacentHTML("afterbegin", `Sleeping now? Yes: ${this.timerSleep}`);
        this.timerSleep--
    }
    sleepFor() {
        document.getElementById("sleeping").innerHTML = "";
        document.getElementById("sleeping").insertAdjacentHTML("afterbegin", `sleep-Timer: ${this.timerSleep}`);
        this.timerSleep--
    }
    sleepEnd() {
        document.getElementById("sleeping").innerHTML = "";
        document.getElementById("sleeping").insertAdjacentHTML("afterbegin", `Sleeping now? no`);
        document.getElementById("img_div").innerHTML = "";
        document.getElementById('img_div').insertAdjacentHTML("afterbegin", `<img id='img_img' src="https://citaty.info/files/characters/137301.jpeg">`)
    }
    eatStart() {
        document.getElementById("eating").innerHTML = "";
        document.getElementById("eating").insertAdjacentHTML("afterbegin", `Eating now? Yes: ${this.timerEat}`);
        this.timerEat--
    }
    eatFor() {
        document.getElementById("eating").innerHTML = "";
        document.getElementById("eating").insertAdjacentHTML("afterbegin", `eat-Timer: ${this.timerEat}`);
        this.timerEat--
    }
    eatEnd() {
        document.getElementById("eating").innerHTML = "";
        document.getElementById("eating").insertAdjacentHTML("afterbegin", `Eating now? no`);
        document.getElementById("img_div").innerHTML = "";
        document.getElementById('img_div').insertAdjacentHTML("afterbegin", `<img id='img_img' src="https://citaty.info/files/characters/137301.jpeg">`)
    }
}

class Superhero {
    constructor() {
        this.fly = 10
    }
    flyStart() {
        document.getElementById("flying").innerHTML = "";
        document.getElementById("flying").insertAdjacentHTML("afterbegin", `Fly now? Yes: ${this.fly}`);
        this.fly--
    }
    flyFor() {
        document.getElementById("flying").innerHTML = "";
        document.getElementById("flying").insertAdjacentHTML("afterbegin", `fly-Timer: ${this.fly}`);
        this.fly--
    }
    flyEnd() {
        document.getElementById("flying").innerHTML = "";
        document.getElementById("flying").insertAdjacentHTML("afterbegin", `Fly now? no`);
        document.getElementById("img_div").innerHTML = "";
        document.getElementById('img_div').insertAdjacentHTML("afterbegin", `<img id='img_img' src="https://citaty.info/files/characters/137301.jpeg">`)
    }
    fightStart() {
        document.getElementById("eating").innerHTML = "";
        document.getElementById("eating").insertAdjacentHTML("afterbegin", `Fight now? Yes`);
    }
}


setInterval(runHunger, 20000);

function runHunger() {
    if (human.calories > 0) {
        human.calories -= 200
        document.getElementById("calories").innerHTML = ""
        document.getElementById("calories").insertAdjacentHTML("afterbegin", `Calories: ${human.calories}`)
    }
}

function runFly() {
    superhero.flyStart()
    let timerId = setInterval(tickFly, 1000)
    function tickFly () {
        superhero.flyFor()
        console.log(superhero.fly)
        if (superhero.fly === 0) {
            clearInterval(timerId)
            key_food = true;
            key_sleep = true;
            key_fly = true
            key_fight = true
            key_superhero = true
            superhero.flyEnd()
            superhero.fly = 10
        }
    }
}

function runSleep(human) {
    console.log(human.timerSleep)
    human.sleepStart()
    let timerId = setInterval(tickSleep, 1000)
    function tickSleep () {
        human.sleepFor()
        if (human.timerSleep === 0) {
            clearInterval(timerId)
            key_food = true;
            key_sleep = true;
            key_fly = true
            key_fight = true
            key_superhero = true
            human.sleepEnd()
            human.timerSleep = 10
        }
    }
}



function runEat(human) {
    human.eatStart()
    let timerId = setInterval(tickEat, 1000)
    function tickEat () {
        human.eatFor()
        if (human.timerEat === 0) {
            clearInterval(timerId)
            key_food = true;
            key_sleep = true;
            key_superhero = true
            key_fight = true
            human.eatEnd()
            human.timerEat = 5
            human.calories += 200
            key_fly = true
            document.getElementById("calories").innerHTML = ""
            document.getElementById("calories").insertAdjacentHTML("afterbegin", `Calories: ${human.calories}`)
        }
    }
}
