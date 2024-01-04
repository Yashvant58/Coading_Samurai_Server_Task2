const mongoose=require('mongoose');

const todoSchema= new mongoose.Schema({
       startTime: {
        type:String ,
                required:true
            },
            endTime:{
                type:String,
                required:true
            },
            work:{
            type:String,
                required:true
                },
            level:{
                type :Number,
                required:true
                },
                position:{
                    type :String,
                    required:true
                }
})
const todo= new mongoose.model('Todos',todoSchema);
module.exports=todo;