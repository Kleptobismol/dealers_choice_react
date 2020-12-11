const path = require('path');
const express = require('express');
const Hand = require('./db/Hand');
const Comment = require('./db/Comment')

const app = express();

app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('src/'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/style.css', (req, res) => res.sendFile(path.join(__dirname, 'style.css')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'src', 'index.html'))
  })

app.get('/hands', async(req, res, next) => {
    try {
        res.send(await Hand.findAll());
    }
    catch(ex) {
        next(ex)
    }
});

app.get('/hands/:id', async(req, res, next) => {
    try {
        res.send(
            await Hand.findAll({
                where: {
                    id: req.params.id
                },
                include: [ Comment ]
        }))
    }
    catch(ex) {
        next(ex)
    }
})

module.exports = app;