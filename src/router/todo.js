const express=require('express');
const router =new express.Router();
const Todo=require("../model/todos");
router.get("/todo",async(req,res)=>{
    try{
        const user= await Todo.find();
        res.status(201).send(user);
    }catch(err){
console.log(err);
res.status(400).send(err);
    }
})
router.post("/todo",async(req,res)=>{
    try{
        const user= new Todo(req.body);
        const userCreate=await user.save();
        res.status(201).send(userCreate);
    }catch(err){
console.log(err);
res.status(400).send(err);
    }
})

router.delete("/todo/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
          const deleteTodo=await Todo.findOneAndDelete({_id});

          console.log(deleteTodo);
          res.status(202).send(deleteTodo);
    }catch(e){
        console.log(e);
        res.status(404).send(e);
    }
})

module.exports = router;