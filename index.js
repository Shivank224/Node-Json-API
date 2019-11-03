const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/empRoutes');
const app = express();
const PORT = process.env.PORT||3000;


// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/empDb');

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));
