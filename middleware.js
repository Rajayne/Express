const ExpressError = require('./expressError')

function logger(req, res, next) {
    console.log(`Recieved a ${req.method} request to ${req.path}.`);
    return next();
}

function checkPassword(req, res, next) {
    try {
        if (req.query.password != "popcorn") {
            throw new ExpressError("Invalid Password!", 403);
        } else {
            return next();
        }
    } catch (e) {
        next(e);
    }
}

module.exports = {logger, checkPassword}