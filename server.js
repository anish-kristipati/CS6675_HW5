// server.js
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = 3000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(express.static('public'));

// Routes for 5 different pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/gallery1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gallery1.html'));
});

app.get('/gallery2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gallery2.html'));
});

app.get('/gallery3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gallery3.html'));
});

app.get('/gallery4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gallery4.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access at: http://localhost:${PORT}`);
});