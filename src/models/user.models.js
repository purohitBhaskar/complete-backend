import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'


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


    //this is how we encrypt password
userSchema.pre('save', async function(next){
    if(!this.isModified(password)) return next()
    this.password = bcrypt.hash(this.password, 10)
    next()
})


//custom methods for password

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)

}


//another method
userSchema.methods.generateAccessToken =  function(){
    return  jwt.sign(
        {
            //payload
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        //access token
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
        
    )
}

userSchema.methods.generateRefreshToken =  function(){
    return  jwt.sign(
        {
            //payload
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        //access token
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
        
    )
}



userSchema.methods.generateRefreshToken = async function(){
    
}
export const User = mongoose.model("User", userSchema)

