import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Example = mongoose.model('Example',exampleSchema);

export default Example;