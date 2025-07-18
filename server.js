// server.js
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');
// remove if caching isn't neded
//const apicache = require('apicache'); 

const app = express();
const PORT = 3000;

// remove if caching isn't neded
//const cache = apicache.middleware;

// Middleware
app.use(compression());
app.use(morgan('combined'));
// remove if caching isn't neded
//app.use(cac`he`('5 minutes'));
app.use(express.static('public'));

// Routes for 5 different pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page1.html'));
});

app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page2.html'));
});

app.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page3.html'));
});

app.get('/page4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page4.html'));
});

app.get('/page5', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'page5.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access at: http://localhost:${PORT}`);
});