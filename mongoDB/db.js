import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
    mail: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    password: {type: String, requried: true}
})

const userModel = mongoose.model(`users`,User)

export default userModel;