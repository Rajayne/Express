const express = require('express');

const app = express();

app.get('/dogs', (req, res) => {
    console.log('Bark!')
    res.send('<h1>Bark!</h1>')
})

app.listen(3000, () => {
    console.log('App running on server 3000');
})