const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/writeFile', (req, res) => {
    fs.writeFileSync('test.txt', 'Hello World');
    res.send('File written');
})

app.get('/readFile', (req, res) => {
    res.send(fs.readFileSync('test.txt', 'utf8'));
})

app.post('/hello', (req, res) => {
    res.send(req.body);
})

app.put('/myPut', (req, res) => {
    res.send(req.body);
})

app.delete('/myDelete/:id', (req, res) => {
    res.send(`ID = ${req.params.id}`);
})

app.get('/hello/:name', (req, res) => {
    res.send(`Hello ${req.params.name} !`);
})

app.get('/hello/:name/:age', (req, res) => {
    res.send(`Name is ${req.params.name} and Age ${req.params.age}`);
})

app.listen(3001, () => {
    console.log('Server is running on 127.0.0.1:3001');
})