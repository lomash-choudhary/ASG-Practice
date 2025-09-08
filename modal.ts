import mongoose from "mongoose"
import { Schema } from "mongoose"

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required:true
    }
})


const userModal = mongoose.model('user', userSchema)

export{
    userModal
}

