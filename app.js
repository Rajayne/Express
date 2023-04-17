const express = require('express');
const routes = require('./routes');
const middleware = require('./middleware')

const app = express();

// Tells express to parse request bodies for json
app.use(express.json());
// Tells express to parse request bodies for form data
app.use(express.urlencoded({extended: true}));

app.use(middleware.logger);

/* Sets root route to /users for routes.js */
app.use('/users', routes)

app.get('/', (req, res) => {
    console.log('Home Page!')
    res.send('<h1>Home Page!</h1>')
})

app.get('/dogs', (req, res) => {
    console.log('Bark!')
    res.send('<h1>Bark!</h1>')
})

app.get('/chickens', (req, res) => {
    res.send('You requested a chicken!')
})

app.post('/chickens', function postChicken(req, res) {
    res.send('You posted a chicken!')
})

const greetings = {
    en: 'hello',
    fr: 'bonjour',
    no: 'hallo',
    jp: 'konnichiwa'
}

app.get('/greet/:language', (req, res) => {
    const lang = req.params.language
    const greeting = greetings[lang]
    res.send(`<h1>${greeting}</h1>`)
})

// If route /search?term=dog&sort=top
// returns term: dog | sort: top
app.get('/search', (req, res) => {
    const {term, sort} = req.query;
    res.send(`<h2>Term: ${term} | Sort: ${sort}</h2>`)
})

// rawHeaders is an array of objects as strings
app.get('/headers', (req, res) => {
    console.log(req.rawHeaders);
    res.send(req.headers);
})

app.get('/show-language', (req, res) => {
    const lang = req.headers['accept-language'];
    res.send(`Your language preference is: ${lang}`);
})

app.post('/register', (req, res) => {
    res.send(`Welcome, ${req.body.username}`);
})

app.listen(3000, () => {
    console.log('App running on server 3000');
})