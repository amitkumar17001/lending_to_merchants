var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteRequestsSchema = Schema({
    fullName: String,
    companyName: String,
    amountNeeded: Number,
    yearsInBusiness: Number,
    phoneNumber: Number,
    emailAddress: String,
    date: Date
});

var QuoteRequests = mongoose.model('quoteRequests', quoteRequestsSchema);
module.exports = QuoteRequests;