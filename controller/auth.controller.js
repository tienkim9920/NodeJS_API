const md5 = require('md5')
const User=require('../model/user.model')

module.exports.login=async function(req,res,next){
    const email=req.body.email;
    const password=req.body.password;
    const user= await User.findOne({email:email});
     if(!user){
         return res.json({msg: "Email không tồn tại"})
     }
     if(md5(password)!=user.password){
        return res.json({msg: "Sai mật khẩu"})
     }
     res.json({msg: "Đăng nhập thành công",user:user})
}
