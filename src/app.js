const express=require("express");
require('./conn/conn');
const cors =require('cors');
const routeTodo=require('./router/todo');
const PORT =process.env.PORT || 3000;
const app=express();

app.use(cors());
app.use(express.json());
app.use(routeTodo);
app.listen(PORT,()=>{
    console.log(`port ${PORT} connection successfully...`);
})