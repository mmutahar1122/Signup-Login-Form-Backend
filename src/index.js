
// import connectDB from './db/index.js';
import express from "express"
import mongoose from "mongoose";
import bcrypt from "bcryptjs"

// import dotenv from "dotenv"

// dotenv.config();


const app = express();
const port = 3000;
app.use(express.json());

// app.use("express")
const signupSchema=new mongoose.Schema(
  {
      fname:{
          type : String,
          required : true,
      },
      lname:{
          type : String,
          required : true,
      },
      email:{
          type : String,
          required : true
      },
      password:{
          type : String,
          required : true
      },
      message :[{
          type : String,
          required : true
      }]
  },
  {timestamps : true})
   const SignupUser=mongoose.model("signupUser",signupSchema);
  

let sampleData = [
  {
    message: "Hello, World!"
  },
  ]
  
  app.get('/', (req, res) => {
      res.json(sampleData);
    });
    
    app.post('/postData', async (req, res) => {
      
      try{
          console.log(req.body)
          const {fname,lname,email,password}=req.body;
          const dataa=req.body;
          const userExist = await SignupUser.findOne({email});
          // console.log("userExist---",userExist);

          if(userExist){
            return res.status(400).json("email already exist");
          }
          const saltRound = 10;
          const password_hash = await bcrypt.hash(password,saltRound);
        const data = await SignupUser.create({fname,lname,email,password:password_hash})
        // console.log('id',data._id)
        return  res.status(200).json({data})
        } catch(error){
          res.status(500).json("internal server error")
        }

        res.json({
            message: "Data received successfully",
            // newData: sampleData
        });
        console.log('sampleData',sampleData)
      });
      
      
      
      
      
      const MURI="mongodb://localhost:27017/Shopping_pro" 
      const MRI="mongodb://127.0.0.1:27017/"
      const DB_Name= "Signup_login"
      const connectDB = async (data)=>{
          const newData=data;
          try{
      const conectionInstance=await mongoose.connect(`${MURI}`)
      console.log("mongodb connected Succefully")
      // console.log(conectionInstance.connection.host)  
      // console.log("data",data)
      
      }
      catch(error){
          console.log("Error",error);
      }
      }
      
      
      
      
      
      // export default connectDB
      



      connectDB().then(()=>{  
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
})

