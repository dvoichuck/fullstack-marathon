// load the things we need
let express = require('express');
let app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
let normal = require('./normal-router')
let quantum = require('./quantum-router')
// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('index')
});
app.get('/normal', function(req, res) {
    res.render('normal', {
        years: normal.calculateTime().years(),
        months: normal.calculateTime().months(),
        days: normal.calculateTime().days()
    })
});
app.get('/quantum', function(req, res) {
    res.render('quantum', {
        years: quantum.calculateTime()[0],
            months: quantum.calculateTime()[1],
            days: quantum.calculateTime()[2]
    })
});

// about page

app.listen(8080);
console.log('8080 is the magic port');