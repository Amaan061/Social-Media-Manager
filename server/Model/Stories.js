const mongoose = require("mongoose");
const storySchema = new mongoose.Schema(
    {
        userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",    
        required: true,
        },
       img:{
        type: String,
        required: true,
        },
        { timestamps: true }
        
       }