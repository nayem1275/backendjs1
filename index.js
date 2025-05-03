const express = require('express')
require('dotenv').config();
const app = express()

const data={
             "Name":"Nayem",
             "ID":"1049",
             "Dept":"CSE"
}

const port =5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter', (req, res) => {
    res.send('<h1>Hello twitter!<h1>')
  })

  app.get('/facebook', (req, res) => {
    res.send('Hello facebook!')
  })

  app.get('/youtube', (req, res) => {
    res.send('Hello youtube!')
  })

  app.get('/data',(req,res)=>{
          res.json(data)
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


