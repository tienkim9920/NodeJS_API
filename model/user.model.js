const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    status: Boolean,
    createDate: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema,'users');
module.exports=User;