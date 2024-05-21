const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Validate the data
    if (!username || !email || !password) {
        return res.status(400).send('Please provide all required fields.');
    }

    // Store the user data in the database (not implemented in this example)

    res.status(200).send('Registration successful!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
