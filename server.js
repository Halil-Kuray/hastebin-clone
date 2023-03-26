const { urlencoded } = require("express")
const express = require("express")
const app = express()
const mongoose = require('mongoose')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost/hastebin-clone', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})





app.get( '/', (req, res) => {

const code = `Welcome to Hastebin Clone
    
Use the commands in the top right corner
to create a new file to share with others.`

const lineNumbers = code.split('\n').length

    res.render('code-display', { code, lineNumbers })
})


app.get('/new', (req,res) => {
    res.render('new')
})

app.post('/save', (req, res) => {
    const body = req.body.value
    console.log(body)
})








app.listen(5000)