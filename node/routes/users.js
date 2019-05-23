// name, email passwords
// email: { type: String, unique: true }const { Rental } = require('../schema/rentalsSchema');
const jwt = require('jsonwebtoken');
const config = require('config');
const { User } = require('./../schema/userSchema');
const auth = require('../middleware/auth');
const validateUser = require('../validation/validateUser');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// get all movies
router.get('/', async (request, response) => {
    const users = await User.find().sort('name');
    response.send(users);
});

// get movie by ID
router.get('/me', auth, async (request, response) => {
    const user = await User.findById(request.user._id).select('-password');
    response.send(user);
});

// post by user
router.post('/', auth, async (request, response) => {
    const { error } = validateUser.validateUser(request.body);
    if (error) return response.status(400).send(error.details[0].message);
    let user = await User.findOne({ email: request.body.email });
    if (user) return response.status(400).send('User already registered.');
    user = new User(_.pick(request.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = user.generateAuthToken();
    response.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;