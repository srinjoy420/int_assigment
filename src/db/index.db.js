import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const COnnectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URl);
        console.log("db connected");
    } catch (error) {
         console.log("error to connect in database",error);
        process.exit(1)
        
    }
}
export default COnnectDB