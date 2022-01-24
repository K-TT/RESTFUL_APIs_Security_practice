import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashPassword: {
        type: String
    },

    created_date: {
        type: Date,
        default: Date.now
    }
});