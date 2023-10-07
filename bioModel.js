const mongoose = require('mongoose');
// Define the schema
const bioSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Define the Bio model and export it
const Bio = mongoose.model('Bio', bioSchema); 
module.exports = Bio;
