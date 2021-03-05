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


let updateSession = moment(new Date()).add(1, 'm').toDate();

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 60 * 1000
}))

app.get('/', (req, res) => {

    if (Number(updateSession) <= Number(new Date()) || !req.session.counter)
        req.session.counter = 1
    else {
        req.session.counter += 1
    }
    res.render('view', {counter: req.session.counter})
})

app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
)