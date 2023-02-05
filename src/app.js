const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./routes');
require('dotenv').config();

app.use(bodyParser.json())

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/test`,)
.then(() => {
    console.log("Successfully connected to database")
}).catch(err => {
    console.log(err)
})

app.use('/api/v1', apiRouter)
  
app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})