var mongoose = require('mongoose');
var configDB = require('./config/database.js');
uristring =  configDB.url;
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log ('Successfully connected to: ' + uristring);
    }
});

module.exports = mongoose.connection;