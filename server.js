const express = require("express")
const app = express()

app.set('view engine', 'ejs')





app.get( '/', (req, res) => {

const code = `Welcome to Hastebin Clone
    
Use the commands in the top right corner
to create a new file to share with others.`

const lineNumbers = code.split('\n').length
    res.render('code-display', { code, lineNumbers })
})












app.listen(5000)