const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nocache = require('nocache');

const port = 8080;
const heros = require('./data.json');

app.use(nocache());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use( ( _req, _res, next ) => {
  setTimeout(next, 2000 );
});

app.get('/api/', function(_req, res) {
  res.json(heros);
});

app.get('/api/:filter', function(req, res) {
  const filtered = heros.filter(h => h.alias.indexOf(req.params.filter?.toLocaleLowerCase()) > -1);
  return res.json(filtered);
});

app.post('/api/', function(req, res) {
  if (!req.body.group) {
    res.status(400).json({ result: 'KO', message: 'Hero data missing' });
  } else {
    const newID = heros.length ? heros.map(i => i.id).sort((a, b) => b - a)[0] : 1;
    const newHero = {
      id: newID + 1,
      ...req.body
    };
    heros.push(newHero);
    res.json({ result: 'OK', data: newHero })
  }
});

app.put('/api/:id', function(req, res) {
  const index = heros.findIndex(item => item.id === +req.params.id);
  if(index > -1) {
    heros[index] = req.body;
    res.json({ result: 'OK', data: req.body });
  } else {
    res.status(400).json({ result: 'KO' });
  }
});

app.delete('/api/:id', function(req, res) {
  const index = heros.findIndex(item => item.id === +req.params.id);
  if (index > -1) {
    heros.splice(index, 1);
    res.json({ result: 'OK' });
  } else {
    res.status(400).json({ result: 'KO' });
  }
});

app.listen(port);
console.log('API listening in port ' + port);
