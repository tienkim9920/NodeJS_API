const mongoose = require('mongoose')
const historySchema = new mongoose.Schema({
    userID: String,
    phone:String,
    address:String,
    cart: [{
        productID:String,
        nameProduct:String,
        price:Number,
        img:String,
        count:Number,
        size:String,
        color:String
    }],
    createDate: { type: Date, default: Date.now }
});
const History = mongoose.model('History', historySchema,'history');
module.exports=History;