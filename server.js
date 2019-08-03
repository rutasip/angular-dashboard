//Install express server
const express = require('express');
const path = require('path');

const app = express();

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-dashboard'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/angular-dashboard/index.html'));
});

// Start the app by listening on the default Heroku port
server.use(middlewares);
server.use(router);

server.listen(port);
