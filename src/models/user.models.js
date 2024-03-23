import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true   //comes in database searching
        },

        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            
        },

        fullname:{
            type: String,
            required: true,
            trim: true,
            index: true
        },

        avatar:{
            type: String,  //cloudnary url
            required: true,
        },

        coverImage:{
            type: String,
            required: true
        },

        watchHistory:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Video"
            }
        ],

        password:{
            type: String,
            required: [true,"password is required"]
        },

        refreshToken:{
            type: String,

        }


    }
    ,{timestamps: true})

export const User = mongoose.model("User", userSchema)
