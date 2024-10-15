// Import the express module to create the server
const express = require('express');

// Import the mongoose module to interact with MongoDB
const mongoose = require('mongoose');

// Import the cors module to enable Cross-Origin Resource Sharing
const cors = require('cors'); // Fixed the typo here

// Create an instance of an Express application
const app = express();

// Use the cors middleware to allow cross-origin requests
app.use(cors()); // Also updated here

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017")
// Start the server on port 3001 and log a message to the console
app.listen(3001, () => {
    console.log("Server is Okay");
});
