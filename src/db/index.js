const DB_Name = require("../constants.js")
const mongoose = require("mongoose")

const MURI = "mongodb://localhost:27017/Shopping_pro"
const MRI = " mongodb://127.0.0.1:27017/"
const connectDB = async (data) => {
    const newData = data;
    try {
        const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log("mongodb connected Succefully")
        // console.log(conectionInstance.connection.host)  

    }
    catch (error) {

        console.log("Error", error);
    }
}


module.exports = connectDB
