const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser') 

const app = express()
const port = 3001

app.use(express.static('public'));

const jsonParser = bodyParser.json()


app.get('/catalog', (req, res) => {
    fs.readFile('./data/catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
})

app.get('/cart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
})

app.post('/cart', jsonParser, (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);

        console.log(req.body)
        cart.push(req.body)

        fs.writeFile('./data/cart.json', JSON.stringify(cart), () => {
            res.end();
        })
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

