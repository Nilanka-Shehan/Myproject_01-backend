import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({  //Blue print of the user
    id:Number,
    name:String
});

const User = mongoose.model('User',userSchema);  //create a model called 'User' using userSchema

export default User;