const { urlencoded } = require("express")
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const Document = require('./model/Document.js')

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

    res.render('code-display', { code })
})


app.get('/new', (req,res) => {
    res.render('new')
})

app.post('/save', async (req, res) => {
    const value = req.body.value
    try{
        const document = await Document.create({value})
        res.redirect(`/${document.id}`)
    }catch(e) {
        res.render('new', {value})
    }
    console.log(value)
})


app.get('/:id', async (req, res) => {
    const id = req.params.id

    try{
        const document = await Document.findById(id)
        res.render('code-display', { code: document.value})
    }catch(e){

    }
})





app.listen(5000)