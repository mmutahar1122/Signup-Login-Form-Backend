const DB_Name = require("../constants.js")
const mongoose =require("mongoose")
// import { SignupUsersSchema } from "../models/signupusers.modesl.js";
// import SignupSchema from "../models/signupusers.modesl.js";
// const signupSchema=new mongoose.Schema(
//     {
//         // fname:{
//         //     type : String,
//         //     required : true,
//         // },
//         // lname:{
//         //     type : String,
//         //     required : true,
//         // },
//         // email:{
//         //     type : String,
//         //     required : true
//         // },
//         // password:{
//         //     type : String,
//         //     required : true
//         // }
//         message :[{
//             type : String,
//             required : true
//         }]
//     },
//     {timestamps : true})


const MURI="mongodb://localhost:27017/Shopping_pro" 
const MRI=" mongodb://127.0.0.1:27017/"
const connectDB = async (data)=>{
    const newData=data;
    try{
const conectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
console.log("mongodb connected Succefully")
// console.log(conectionInstance.connection.host)  
console.log("data",data)

// newData.save().then(item => res.send(item)).catch(err => res.status(400).send(err));
}
catch(error){
    console.log("Error",error);
}
}





// export const SignupUser=mongoose.model("signupUser",SignupSchema);
module.exports = connectDB
