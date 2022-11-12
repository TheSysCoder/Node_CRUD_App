// user schema here
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName:{
            type: String,
            required: true,
        }
    },
    {
        userEmail:{
            type: String,
            required: true
        }
    }
)

export default mongoose.model("users",userSchema)