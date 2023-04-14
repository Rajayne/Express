# Express

# App.listen
- doesn't do anything but respond 404s
- indicates server is running!
- takes a port and callback: app.listen(port, function)
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