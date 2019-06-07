'use strict';
/** 
 * Module dependencies. 
 */
process.env.NODE_ENV = process.env.NODE_ENV||'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose();
var app = express();
var port=process.env.PORT||1337;
app.listen(port);
module.exports = app;
console.log('Express server listening on port ' +port);
