const express = require('express');
const countries = require('./db/countries.json');

const app = express();

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// Endpoint to return our own locally stored data
app.get('/api/countries', (req, res) => res.json(countries));

app.listen(3001, () => console.log('Express Server on port 3001!'));