import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsersModel = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, required: true }, 
    shop : { type: String, required: false },
})

const users = mongoose.model('User', UsersModel);
export default users;
//module.exports = mongoose.model('company', Co