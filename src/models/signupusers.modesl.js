const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const SignupSchema = new mongoose.Schema(
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
        }
    },
    {timestamps : true})

const SECRET_KEY = "myfirst-jwt-Token";


SignupSchema.methods.generateToken = async function() {
        try {
          const token = jwt.sign({
            userId: this._id,
            email: this.email
          }, SECRET_KEY, {
            expiresIn: "30d" 
          });
          return token;
        } catch (error) {
          console.error("-=-=error-==-", error);
          throw error; 
        }
      };
      
      const SignupUser = mongoose.model("signupUser", SignupSchema);


    module.exports = SignupUser