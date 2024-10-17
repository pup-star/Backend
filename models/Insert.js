const mongoose = require('mongoose');

const InsertSchema = new mongoose.Schema({
    title: {type: String, require:true},
    body: {type: String, require:true},
});

module.exports = mongoose.model('Insert', InsertSchema);