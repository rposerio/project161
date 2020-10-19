import mongoose, { Mongoose } from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    },

    phoneNumber: {
        type = String,
        required = true
    }
})

const user = Mongoose.model('user', UserSchema);

export default UserSchema;