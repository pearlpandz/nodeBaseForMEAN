const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const arraypush = new mongoose.Schema({
    ids: [

    ]
});

var ArrayPush = mongoose.model('test', arraypush);

module.exports = ArrayPush;