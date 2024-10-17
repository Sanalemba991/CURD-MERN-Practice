// Import the express module to create the server
const express = require('express');

// Import the mongoose module to interact with MongoDB
const mongoose = require('mongoose');

// Import the cors module to enable Cross-Origin Resource Sharing
const cors = require('cors');

// Import the User model
const UserModel = require('./models/User');

// Create an instance of an Express application
const app = express();

// Use the cors middleware to allow cross-origin requests
app.use(cors());

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB (fixing the connection string)
mongoose.connect("mongodb://127.0.0.1:27017/curd", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// GET route to fetch all users
app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users)) // Use `users` here
        .catch(err => res.status(500).json({ message: "Error fetching users", error: err }));
});
app.get('/getUser/:id', (req, res) => {
   const id=req.params(id);
   UserModel.findById({id})
   .then(users => res.json(users)) // Use `users` here
   .catch(err => res.status(500).json({ message: "Error fetching users", error: err }));
});


// POST route to create a user
app.post("/create", (req, res) => {
    UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err)); // Ensure errors are handled properly
});

// Start the server on port 3001 and log a message to the console
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
