import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum: ['president', 'manager', 'member'],
        default:"member",
    },
    managedDepartment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    default: null
  }
},{
    timestamps:true,
})

userSchema.methods.matchPassword=async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save',async function(next){
    if (!this.isModified('password')){
        return next();
    }
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt) ;
})

export default mongoose.model('User',userSchema)