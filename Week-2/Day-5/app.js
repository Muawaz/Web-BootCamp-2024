// const express = require('express');
// const session = require('express-session');
// const passport = require('./passport');
// const authRoutes = require('./authRoutes');

// const app = express();

// app.use( session({ secret: 'YOUR_SESSION_SECRET', resave: false, saveUninitialized: false }));
// app.use( passport.initialize());
// app.use( passport.session());

// app.use( '/', authRoutes);

// //Start the server
// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// })

import * as dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import fetch from 'node-fetch';
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.send('Sign in with Google');
});

app.get('/google/callback', async (req, res) => {
    res.send("Google OAuth Callback Url !");
});

const port = process.env.PORT || 3000;

const start = async (port) => {
    app.listen(port, () => {
        console.log(`Server running on portL http://localhost:${port}`);
    });
};

start(port);