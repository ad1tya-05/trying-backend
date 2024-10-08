require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res) =>{
    res.send('Twitter')
})
app.get('/hello',(req,res) =>{
    res.send('<h1>my name aditya bhardwaj</h1>')
})
app.get('/facebook',(req,res) =>{
  res.send('<h2>your are going right</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})