import bcrypt from 'bcryptjs';
import User from '../models/User.js';

/**
 * Handles user signup.
 * Supports both Agent and non-Agent roles with appropriate fields.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const signupUser = async (req, res) => {
    try {
        // Extract basic fields from req.body
        const { role, email, mobile, username, password } = req.body || {};

        // Validate role
        if (!role) {
            return res.status(400).json({ message: 'Role is required.' });
        }

        // Initialize variables for Agent-specific fields
        const agentFields = ['fullName', 'dateOfBirth', 'gender', 'experience', 'specialization', 'address', 'about', 'profilePictureId'];

        // Extract Agent-specific fields if role is 'Agent'
        const agentData = role === 'Agent' ? agentFields.reduce((acc, field) => ({ ...acc, [field]: req.body[field] }), {}) : {};

        // Validate Agent-specific fields
        if (role === 'Agent') {
            for (const field of agentFields) {
                if (!req.body[field]) {
                    return res.status(400).json({ message: `Field ${field} is required for Agents.` });
                }
            }
        }

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Handle profile picture upload (assuming GridFS with multer)
        const profilePictureId = req.file ? req.file.id : null;

        // Create a new user object
        const newUser = new User({
            role,
            email,
            mobile,
            username,
            password: hashedPassword,
            ...agentData,
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message
        return res.status(201).json({ message: 'User created successfully.' });
    } catch (err) {
        console.error('Signup error:', err);

        // If headers are already sent, delegate error handling
        if (res.headersSent) {
            return;
        }

        // Determine error message based on error type
        let errorMsg = 'Server error. Please try again later.';
        if (err.name === 'ValidationError') {
            errorMsg = err.message;
        }
        
        return res.status(500).json({ message: errorMsg });
    }
};