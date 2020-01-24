const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CurdDB', (err) => {
    if (!err)
        console.log("MongoDB Connection succeeded.");
    else
        console.log('Error in DB Connection : ' + JSON.stringify(err))
});

module.exports = mongoose;

