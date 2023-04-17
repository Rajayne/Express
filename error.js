const express = require('express');
const ExpressError = require('./expressError')
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("Server recieved a request!")
    next();
})

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
];

app.get('/users/:username', function(req, res, next) {
    try {
        const user = USERS.find(u => u.username === req.params.username);
        if (!user) throw new ExpressError("Invalid Username", 404);
        return res.send({user});
    } catch(e) {
        next(e);
    }
})

app.get('/secret', (req, res, next) => {
    try {
        if (req.query.password != "popcorn") {
            throw new ExpressError("Invalid Password!", 403);
        }
        return res.send("Congrats, you know the password!")
    } catch (e) {
        next(e);
    }
})

app.get('/savetodb', (req, res) => {
    attemptToSaveToDB()
    res.send("Saved to DB!")
})

app.use((err, req, res, next) => {
    res.status(err.status).send(err.message);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})