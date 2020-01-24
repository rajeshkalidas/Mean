const express = require('express');
const bodyParser =  require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');

var contactController = require('./controllers/contactController');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () =>{
    console.log('Server Started at port :3000');
})


app.use('/contacts', contactController);