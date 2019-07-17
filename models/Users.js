const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Mongoose/MongoDB: Generates new Schema for Users
const UserSchema = new Schema({
    user_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }
    
});

module.exports = UserData = mongoose.model('UserData', UserSchema);