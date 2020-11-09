const Cart = require('../model/cart.model')
const History=require('../model/history.model')

module.exports.index=async (req,res)=>{
    const carts = await Cart.find();
    res.json(carts)
}

module.exports.addCart = async (req, res) => {
    const cartItem=await Cart.find({userID:req.body.userID});
    const query=[{productID:req.body.productID},
                {size:req.body.size},{color:req.body.color},
                {userID:req.body.userID}];
    const cart=await Cart.findOne({$and:query});
    if(cartItem.length>0)
    {
       if(cart){
           let count=cart.count+Number(req.body.count)
            await Cart.updateMany({productID:req.body.productID},{count:count})
            res.json("Đã thêm vào giỏ hàng");
       }
       else{
            await Cart.create(req.body)
            res.json("Đã thêm vào giỏ hàng");
       }
    }
    else{
        await Cart.create(req.body)
        res.json("Đã thêm vào giỏ hàng");
    }
}

module.exports.deleteCart= async function(req,res){
    const query=[{_id:req.body.id},{userID:req.body.userID}];
    await Cart.deleteOne({$and:query},(err) => {
        if (err){
            console.log(err);
            return;
        }     
    })
    res.json("Xóa hàng thành công")
}

module.exports.postIndex= async function(req,res){
    const carts=await Cart.find({userID:req.body.userID})
    console.log(carts)
    let cartArr=carts.map(e=>{
        return e
    })

    await History.create({
        userID:  req.body.userID,
        address:req.body.address,
        phone:req.body.phone,
        cart: cartArr
            
    })
    await Cart.deleteMany({userID:req.body.userID})
    res.send('Đặt hàng thành công')
}
