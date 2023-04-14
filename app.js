const express = require('express');

const app = express();

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

app.listen(3000, () => {
    console.log('App running on server 3000');
})