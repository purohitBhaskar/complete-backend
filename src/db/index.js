// import express from 'exprees'
import mongoose from "mongoose"
import {DB_NAME}  from "../constants.js"

const connectDB = async ()=>{
    try{
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("connection error ", error);
        process.exit(1)  //different exit process have different codes, we are using 1
    }
}

export default connectDB