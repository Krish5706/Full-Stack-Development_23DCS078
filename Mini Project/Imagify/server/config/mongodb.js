import mongoose from "mongoose";

const connectDB = async () =>{
    mongoose.connection.on('connected',()=>{
        console.log("Data base Connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/imagify`)
}

export default connectDB;