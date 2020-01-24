const mongoose = require('mongoose');

var Contacts = mongoose.model('Contacts',{
    name : {type:String},
    surname:{type:String},
    number:{type:Number},
    birthday:{type:String},
    address:{type:String}
});

module.exports =  {Contacts};