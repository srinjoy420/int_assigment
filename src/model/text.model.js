import mongoose, { Schema } from "mongoose";

const textschema = new Schema({
    text: {
        type: String,
        required: true
    },
    category: {
        type: String,
         required: true
        
    },
    confidence: {
        type: Number
    },

}, { timestamps: true })

const TextModel=mongoose.model("Text",textschema)
export default TextModel