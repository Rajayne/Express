const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const candies = [
    {name: 'snickers', quantity: 43, price: 1.50},
    {name: 'skittles', quantity: 26, price: 0.99}
];

app.get('/candies', (req, res) => {
    res.json(candies)
})

app.post('/candies', (req,res) => {
    if (req.body.name.toLowerCase() === "circus peanuts") {
        res.status(403).json({msg: "Circus peanuts forbidden."});
    };
    candies.push(req.body);
    res.json(candies);
    // Send manual status code response
    res.status(201).json(candies);
})

app.listen(3000, () => {
    console.log('App running on server 3000');
})