import Example from '../models/ExampleModel.js';

export const getExample = async (req, res) => {
    try {
        const examples = await Example.find({});
        res.json(examples);
    }
    catch  (err) {
        res.status(500).json({ message: err.message});
    }
};