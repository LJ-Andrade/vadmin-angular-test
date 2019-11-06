'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/vadmin2', { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => {
        console.log("DB Connection success, pá!");

        // Create server and listen HTTP petitions.
        app.listen(port, () => {
            console.log('Server running on http://localhost:' + port);
        });
    })
    .catch(err => {
        // console.log(DB Connection Error: ${err.message});
        console.log("VLog - Error on DB: " + err.message);
    });


    