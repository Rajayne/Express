const express = require('express');
const ExpressError = require('./expressError')
const middleware = require('./middleware')
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

// app.get('/secret', (req, res, next) => {
//     try {
//         if (req.query.password != "popcorn") {
//             throw new ExpressError("Invalid Password!", 403);
//         }
//         return res.send("Congrats, you know the password!")
//     } catch (e) {
//         next(e);
//     }
// })

app.get('/secret', middleware.checkPassword, (req, res, next) => {
    return res.send("Congrats, you know the password!")
})

app.get('/private', middleware.checkPassword, (req, res, next) => {
    return res.send("Welcome to the private page!")
})

app.get('/savetodb', (req, res) => {
    attemptToSaveToDB()
    res.send("Saved to DB!")
})

/* Generic 404 at the end of routes, before other error handling
If no route found before it, will return 404 Page Not Found */
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e);
})

app.use((err, req, res, next) => {
    // default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: {message, status}
    });
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})