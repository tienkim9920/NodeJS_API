const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    categories:String
});
const Product = mongoose.model('Product', productSchema,'products');
module.exports=Product;