const express = require('express')
const path = require('path')
const Filepath = path.join(__dirname+'/home.html');

const app = express()

const port = process.env.PORT || 1000;
app.get('/' , (req , res) => {
    res.send("Hello from nodejs ");
})

app.get('/home' , (req ,res) => {
    res.sendFile(Filepath)
})

app.listen(port , () => {
    console.log(`server is running on port ${port}`)
})

