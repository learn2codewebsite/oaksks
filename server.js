const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const path = require('path'); // Import the 'path' module

const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_data'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Registration endpoint
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, hashedPassword], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).send('Username or Email already exists');
      }
      return res.status(500).send('Database error');
    }
    res.status(201).send('User registered successfully');
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Received login request with email:', email);

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res.status(500).send('Database error');
    }
    if (results.length === 0) {
      return res.status(400).send('Invalid credentials');
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.status(200).send('Login successful');
    } else {
      res.status(400).send('Invalid credentials');
    }
  });
});

// Define a route handler for the root URL
app.use(express.static(__dirname));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});