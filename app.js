require('dotenv').config()

const express = require('express')
const hbs = require('hbs');

const port = process.env.PORT
const app = express()




// Utilizar hbs handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Middleware servir contenido estatico
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Home page')
// })


// ESTE ES EL CONTROLADOR!!
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Carlos López',
        titulo: 'Curso de node'
    })
})


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Carlos López',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Carlos López',
        titulo: 'Curso de node'
    })
})

// ruta comodin
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})