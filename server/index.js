const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())



add.post('/add',(req, res) => {
    const task = req.body.task;
    Collection.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})
app.listen(3001, () => {
       console.log("Server is runnning")
})