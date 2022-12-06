require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
// mongoose.set('strictQuery', true);
const database = mongoose.connection
const routes = require('./routes/routes')

database.on('error', (error) => { 
    console.log(error)
})

database.once('connected', () => { 
    console.log('success connection to database.');
})

app.use(express.json());
app.use('/api', routes)
app.listen(port, () => { 
    console.log('Server iniated at', port)
})