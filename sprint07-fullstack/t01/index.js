let bodyParser = require( "body-parser")

const urlencodedParser = bodyParser.urlencoded({extended: false});
const express = require('express'),
    app = express(),
    cookieSession = require('cookie-session')

const host = '127.0.0.1'
const port = 7000
let engines = require('consolidate');
app.set("views", __dirname + "/");
app.engine("html", engines.mustache);
app.set("view engine", "html");

const moment = require('moment')

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
}))


app.get("/", urlencodedParser, function (req, res) {
    res.render("view");
});


app.post("/", urlencodedParser, (req, res) => {
    console.log(req.body)
    let date = req.body

    res.render('forget', {
        name: date.name,
        alias: date.alias,
        age: date.age,
        description: date.description,
        photo: date.photo,
        experience: date.experience,
        level: date.level,
        purpose: date.purpose
    })
});


app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
)