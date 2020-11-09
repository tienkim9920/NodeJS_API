const Product = require('../model/product.model')

module.exports.index = async (req, res,next) => {
    const products = await Product.find();
    res.json(products)
}
