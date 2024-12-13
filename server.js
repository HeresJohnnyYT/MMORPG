const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Setup middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simulate user database
let users = [];

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Registration route
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already taken!' });
    }

    users.push({ username, password, stats: { health: 100, strength: 10, intelligence: 10 } });
    res.status(200).json({ message: 'Registration successful!' });
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials!' });
    }

    res.status(200).json({ message: 'Login successful!', user });
});

// Combat route
app.post('/combat', (req, res) => {
    const { user1, user2 } = req.body;

    const player1 = users.find(user => user.username === user1);
    const player2 = users.find(user => user.username === user2);

    if (!player1 || !player2) {
        return res.status(400).json({ message: 'Invalid users!' });
    }

    // Simple combat calculation (based on strength)
    const result = player1.stats.strength > player2.stats.strength ? user1 : user2;

    res.status(200).json({ message: `${result} wins the combat!` });
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
