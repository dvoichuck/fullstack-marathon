let bodyParser = require( "body-parser")
let path = require('path')
const urlencodedParser = bodyParser.urlencoded({extended: false});
const express = require('express'),
    app = express(),
    cookieSession = require('cookie-session')
const host = '127.0.0.1'
const port = 7000
let engines = require('engines')

const User = require('./user')



app.use(express.static(path.join(__dirname, 'public')));
const ejs = require('ejs')
app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);


app.get('/', urlencodedParser, function (req, res) {
    res.render('view.html', {
        answer: '',
        incorrect: ''
    })
})

app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body)
    User.create({
        login: req.body.login,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email
    }).then(res=> {res.render('view.html', {
        answer: 'Account Created!!!',
        incorrect: ''
    })

    })
    .catch(err=>{res.render('view.html', {
        answer: '',
        incorrect: 'Email or login is already taken'
    })});

})


app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
)