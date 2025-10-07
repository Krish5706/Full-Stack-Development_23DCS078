// server.js

const express = require('express');

// Create an instance of the express app
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Define a route handler for the home page
app.get('/', (req, res) => {
  res.send('Welcome to our site');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
