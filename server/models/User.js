const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Make the name field required
    },
    email: {
        type: String,
        required: true, // Make the email field required
        unique: true, // Ensure emails are unique
        lowercase: true, // Store emails in lowercase
    },
    age: {
        type: Number,
        min: 0, // Ensure age is a non-negative number
    },
});

// Create the User model from the schema
const UserModel = mongoose.model('User', UserSchema);

// Export the User model
module.exports = UserModel;
