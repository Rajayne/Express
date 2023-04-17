const express = require('express');
const ExpressError = require('./expressError')
const app = express();

app.use(express.json());

/* Express default error handling:
When error is raised/thrown callback stops running
Express returns text from with status code 500 */ 
function attemptToSaveToDB() {
    throw "Connection Error!"
}

USERS = [
    {username: "Raja", city: "Sacramento"},
    {username: "ATVDown", city: "Sacramento"},
    {username: "OmegaMagus", city: "Boston"}
]

app.get('/users/:username', function(req, res, next) {
    const user = USERS.find(u => u.username === req.params.username);
    if (!user) return res.status(404).send("Not found!");
    return res.send({user});
})

app.get('/secret', (req, res) => {
    if (req.query.password != "popcorn") {
        return res.status(403).send("Invalid password");
    }
    return res.send("Congrats, you know the password!")
})

app.get('/savetodb', (req, res) => {
    attemptToSaveToDB()
    res.send("Saved to DB!")
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})