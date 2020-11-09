require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const cors=require('cors');

const mongoose = require('mongoose')
const productRoute=require('./routes/product.route')
const cartRoute=require('./routes/cart.route')
const authRoute=require('./routes/auth.route')
const userRoute=require('./routes/user.route')
const historyRoute=require('./routes/history.route')

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true},
    function (err, db) {
     if(err) console.log(err);
     else console.log("Connect is successfull")
  });
  
  
  let port=process.env.PORT || 3000
  
  const app = express()
  app.use(cors())
  app.use('/', express.static('public'))
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/product', productRoute)
  app.use('/cart',cartRoute)
  app.use('/login',authRoute)
  app.use('/user',userRoute)
  app.use('/history',historyRoute)
  app.listen(port, () => {
      console.log('server running at ' + port)
    })