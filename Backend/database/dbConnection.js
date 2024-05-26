import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.mongo_url,{
        dbName:"MernStack_RozgarHub",
    }).then(()=>{
        console.log('connected to database successfully');
    }).catch((err)=>{
        console.log('some error occured while connecting database '+ err);
    })
}