var express = require('express');
var app = express();
var router = require('./routes/users');

app.use('/users', router);

app.listen(3000);