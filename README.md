# Express
Node provides a runtime environment to run JavaScript outside of the browser.

# App.listen
- doesn't do anything but respond 404s
- indicates server is running!
- takes a port and callback: app.listen(port, function)
- if port is 3000, will host server on localhost:3000
- should always be at the bottom of a file

# Route Handlers
Event listeners similar to Flask view functions:

    - Flask: from flask import 
    Flask app = Flask(name)

    @app.route('/dogs) 
    def bark(): 
        return 'Bark'

    - Express: const express = require
    ('express'); const app = express();

    app.get('/dogs', function(request, response) { 
        return response.send('Bark') 
    })

# Request and Response
Every handler should have a callback with two parameters:
- request: information about a request i.e. query string, url parameters, form data
- response: methods for sending a response i.e. html, text, json

# Request-Response Cycle
- Express registers all event listeners BEFORE app.listen
- Express will invoke the FIRST matching route handler it finds until a response is issued i.e. if there are two identical routes, only the first will run

# Route Methods
- app.get
- app.post
- app.put
- app.patch
- app.delete

# Route Callbacks
- Can use arrow function () => or named function, or define standalone function and pass in as callback

# Nodemon
Wrapper for node that will stop and restart server when it detects a change to the file
- npm install --global nodemon
- nodemon -v to check version
- nodemon app.js to run server

# URL Parameters
Specify parameter by prefixing with ':'
- app.get('/:name', callback)

# Request Properties
- Query String (request.query)
- Headers (request.headers)
- Body (request.body)
    In order to capture request.body content, must include app.use() to parse (middleware)

# Express Middleware
App.use() runs a callback on every request.
When defining route parameter, able to call next (req, res, next), can execute next() to prevent app.use from stopping rest of code from executing.
- app.use(res, req) => {console.log("Request sent!)} will console.log for every route get but won't execute code below it
- app.use(res, req, next) => {console.log("Request sent!); next();} returns next executable code

# Return
Express does not need functions to return a value but JavaScript will stop executing code after a return, which can prevent errors.

# Error Handling
Express default when error is raised/thrown is callback stops running and returns error text with status code 500.  Alternatively, create own error class.
Rules of error handling:
    1. Should be at the bottom of file because any handlers defined above can potentially throw erors
    2. Should match every HTTP verb and path: app.use(callback)
    3. Callback signature to error handlers has four parameters: function(err, req, res, next)