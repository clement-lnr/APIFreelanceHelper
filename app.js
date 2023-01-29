const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json())

mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/test`,
).then(() => {
    console.log("Successfully connected to database")
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})