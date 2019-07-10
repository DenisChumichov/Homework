const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.get('/', function (req, res) {
  res.send('Got a GET request');
});

app.all('/users', function (req, res, next) {
  console.log('Accessing the users');
  next(); // pass control to the next handler
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});

