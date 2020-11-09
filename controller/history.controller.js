const History = require('../model/history.model')

module.exports.index=async (req,res)=>{
    const history = await History.find();
    res.json(history)
}