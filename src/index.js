

const express = require("express");
const mongoose = require("mongoose");
const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken");

require('dotenv').config()

const router = require("./Router/auth-Route")
const SignupUser = require("./models/signupusers.modesl")

const ConnectDB = require("./db")
const app = express();

app.use(express.json());
app.use("/api/auth", router );




let sampleData = [
  {
    message: "Hello, World!"
  },
  ]
  
  // app.get('/', (req, res) => {
  //     res.json(sampleData);
  //   });
    
    // app.post('/postData', async (req, res) => {
      
    //   try{
    //       console.log(req.body)
    //       const {fname,lname,email,password}=req.body;
    //       const dataa=req.body;
    //       const userExist = await SignupUser.findOne({email});

    //       if(userExist){
    //         return res.status(400).json("email already exist");
    //       }
    //       const saltRound = 10;
    //       const password_hash = await bcrypt.hash(password,saltRound);
    //     const data = await SignupUser.create({fname,lname,email,password:password_hash})
      
    //     return  res.status(200).json({data, token: await data.generateToken(),userId:data._id})
    //     } catch(error){
    //       res.status(500).json("internal server error")
    //     }

    //     res.json({
    //         message: "Data received successfully",
    //         // newData: sampleData
    //     });
    //     console.log('sampleData',sampleData)
    //   });
      



      ConnectDB().then(()=>{  
app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
})

