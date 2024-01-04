const mongoose =require('mongoose');

const conn=async()=>{
try{
    const DB='mongodb+srv://yashvant:Prajapati%4058@cluster0.dhlccif.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(DB);
    console.log("mongodb connected...");
}catch(err){
    console.log(err);
}
}
conn();