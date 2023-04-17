/* Extends normal JS error 
Returned by error-handling middleware */

class ExpressError extends Error {
    constructor (message, status) {
        super();
        this.message = message;
        this.status = status;
        console.log(this.stack);
    }
}

module.exports = ExpressError;