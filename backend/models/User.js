import mongoose from  'mongoose';

const userSchema = new mongoose.Schema({
    role: {type: String, required: true},
    email: {type: String, required: true},
    mobile: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    fullName: String,
    gender: String,
    experience: String,
    specialization: String,
    address: String,
    about: String,
    profilePictureId: {type: mongoose.Schema.Types.ObjectId, ref: 'fs.files' },
});

export default mongoose.model('User', userSchema);