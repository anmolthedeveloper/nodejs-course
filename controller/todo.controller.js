const todoModel = require("../model/todo.model")

const create = (req, res)=>{
    console.log(req.body.name);
    const todo = new todoModel({name : req.body.name, desc: req.body.desc});
    const result = todo.save();
    if(result){
        res.send(result);
    } else {
        res.status(500);
        res.send('Failed');
    }
}


module.exports = {
    create,
}