
const  mongoose  = require("mongoose");
const UserSchema = new mongoose.Schema({


    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        min:6
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profileImg:{
        type:String,
        default:""
    },
    followings:{
        type:[String],
        default:[]
    },
    bio:{
        type:String,
        default:""
    },
    bookmarkedPosts:{
        type:Array,
        default:[]
    }

},
{timestamps:true}
)

module.exports = mongoose.model("User",UserSchema)