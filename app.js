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

app.listen(3000, () => {
    console.log('App running on server 3000');
})