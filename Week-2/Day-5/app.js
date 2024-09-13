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

// import * as dotenv from 'dotenv'
// dotenv.config();
// import express from 'express';
// import fetch from 'node-fetch';
// import mongoose from 'mongoose';
// import jwt from 'jsonwebtoken';


require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')


// =============================================DATABASE
const mongoDBURI = process.env.MONGO_DB_URI;
mongoose.connect(mongoDBURI)
.then(() => console.log('MongoDB connected Successfully'))
.catch(err => console.log("MongoDB conenction error", err));

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 56,
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: false,
    },
});

UserSchema.methods.generateToken = function () {
    const token = jwt.sign({ id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
    return token;
};

const User = mongoose.model('User', UserSchema);

// =====================================================================
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const start = async (port) => {
    app.listen(port, () => {
        console.log(`Server running on portL http://localhost:${port}`);
    });
};

start(port);

const GOOGLE_OAUTH_URL = process.env.GOOGLE_OAUTH_URL;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CALLBACK_URL = "http://localhost:8000/google/callback";
const GOOGLE_OAUTH_SCOPES = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
]

app.get('/', async (req, res) => {
    const state = 'some_state';
    const scopes = GOOGLE_OAUTH_SCOPES.join(' ');
    const GOOGLE_OAUTH_CONSENT_URL = `${GOOGLE_OAUTH_URL}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_CALLBACK_URL}&access_type=offline&response_type=code&state=${state}&scope=${scopes}`;
    res.redirect(GOOGLE_OAUTH_CONSENT_URL);
});


const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_ACCESS_TOKEN_URL = process.env.GOOGLE_ACCESS_TOKEN_URL;

app.get('/google/callback', async (req, res) => {
    console.log(req.query);
    const { code } = req.query;
    const data = {
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: 'http://localhost:8000/google/callback',
        grant_type: 'authorization_code',
    };
    console.log(data);

    try {
        //exchange authorization code for acess token & id_token
        const response = await fetch(GOOGLE_ACCESS_TOKEN_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(data),
        });
        const access_token_data = await response.json();
    
        const { id_token } = access_token_data;
        console.log(id_token);
    
        // verify and extract the information in the id token
    
        const token_info_resposne = await fetch ( 
            `${process.env.GOOGLE_TOKEN_INFO_URL}?id_token=${id_token}`
        );
        const token_info_data = await token_info_resposne.json();
        res.status(token_info_resposne.status).json( token_info_data);
    
        
        const { email, name } = token_info_data;

        let user = await User.findOne({ email }).select('-password');
        if(!user) {
            user = await User.create({ email, name});
        }
        const token = user.generateToken();
        // res.status(token_info_resposne.status).json({ user, token });
        res.status(200).json({ user, token });
    }
    catch (error) {
        console.error('Error during OAuth callback', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server error' });
        }
    }


});

