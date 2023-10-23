const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// GET route to serve the 'index.html' file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST route to handle form submission
app.post('/submit', (req, res) => {
  const { firstName, lastName, email } = req.body;

  res.send(`
    <h1>Form Data</h1>
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Email: ${email}</p> 
  `);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
