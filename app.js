const express = require('express')
const app = express()
require('dotenv').config();
const hbs=require('hbs');
//midlewere  contenido estatico
const port=process.env.PORT 
app.set('view engine','hbs');
app.use( express.static('public'));
const pathp=__dirname+'/views/partial'
hbs.registerPartial(pathp,function(err){})

app.get('/', function (req, res) {
  res.render('home',{
    name:'ignacio Fernández',
    curso:'node js',
    ruta:pathp
  });
})

app.get('/generic', function (req, res) {
  res.sendFile(__dirname+'/public/generic')
})
app.get('/elements', function (req, res) {
  res.sendFile(__dirname+'/public/elements.html')
})

app.get('*', function (req, res) {
    res.sendFile(__dirname +'/public/404.html');
  })

app.listen(port)