import mongoose, { Schema } from "mongoose";

const {Scheme} = mongoose

const userSchema = new Schema(
    {
        name:{
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

delete mongoose.connection.models['User']; 
export default mongoose.model("User", userSchema);