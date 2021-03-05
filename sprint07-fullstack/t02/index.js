let bcrypt = require('bcrypt'),
    bodyParser = require( "body-parser"),
    cookieParser = require('cookie-parser')
const express = require('express'),
    app = express()
const urlencodedParser = bodyParser.urlencoded({extended: false});
let passwordToSave
const port = 7000
const host = '127.0.0.1'
let engines = require('consolidate');
const moment = require('moment')
let password = []

app.set("views", __dirname + "/");
app.engine("html", engines.mustache);
app.set("view engine", "html");

app.use(cookieParser())

app.get("/", urlencodedParser, function (req, res) {
    let date = req.body
    console.log("------get------\n" + date)
    console.log('Cookies: ', req.cookies.password)
    console.log('Password: ', passwordToSave)
    if (!req.cookies.password) {
        console.log(req.cookies.password)
        res.render("passwordSave")
    }
    else {
        res.render('passwordHash', {
            hash: req.cookies.password
        })
    }
});

app.post("/", urlencodedParser, (req, res) => {
    let date = req.body
    console.log("------post/next------")
    console.log(date)

    if (bcrypt.compareSync(req.body.password, req.cookies.password)) {
        res.render('passwordSave', {
            answer: "Hacked!"
        });
    }
    else {
        res.render('passwordSave', {
            answer: "Access denied!"
        });
    }
})


app.post("/next", urlencodedParser, (req, res) => {
    let date = req.body
    console.log("------post------")
    console.log(date)

    let passwordFromUser = req.body.password;
    let salt = bcrypt.genSaltSync(Number(req.body.salt));
    passwordToSave = bcrypt.hashSync(passwordFromUser, salt);
    res.setHeader('Set-Cookie', [`password=${passwordToSave}`])
    res.render('passwordHash', {
        hash: req.cookies.password
    });
})



app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
)