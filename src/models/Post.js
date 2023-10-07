import mongoose, { Schema } from "mongoose";

const {Scheme} = mongoose

const postSchema = new Schema(
    {
        title:{
            type: String,
            unique: true,
            required: true,
        },
        desc: {
            type: String,
            unique: true,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

delete mongoose.connection.models['Posts']; 

export default mongoose.model("Posts", postSchema);