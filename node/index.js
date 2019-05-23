// const startupDebugger = require('debug')('app:startup');
// const dbDebugger = require('debug')('app:db');
// const config = require('config');
// const morgan = require('morgan');
// const helmet = require('helmet');
// const movieData = require('./movieData');
// const logger = require('./middleware/logger');
const config = require('config');
const mongoose = require('mongoose');
const express = require('express');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
// app routes
const users = require('./routes/users');
const auth = require('./routes/auth');
const app = express();

if (!config.get('jwtPrivateKey')) {
    console.log('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}
// connect to Mongo DB
mongoose.connect('mongodb://localhost/card-borrow')
    .then(() => console.log('Connected to MongoDb...'))
    .catch((error) => console.error('Could not connect to Mongo DB... ', error));

// middleware usage
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
// PORT
const port = process.env.PORT || 3000;
app.listen(port, (console.log(`Port: ${port}`)));
