'use strict'

// Load node modules
var express = require('express');
var bodyparser = require('body-parser');

// Run express (http)
var app = express();

// Load route files

// Middlewares
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// CORS


// Add prefixes to routes

// Test
app.get('/testing', (req, res) => {
    return res.status(200).send({
        API: 'Vadmin2',
        Author: 'Leandro Andrade',
        Web: 'https://vimanastudio.com.ar'
    });
});


// Export module
module.exports = app;