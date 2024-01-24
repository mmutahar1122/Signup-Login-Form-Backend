import mongoose from "mongoose";

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

    export default SignupSchema