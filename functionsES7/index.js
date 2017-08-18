'use strict';

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const _app = express();

// Middleware
_app.use(cors({origin: true}));
_app.use(cookieParser());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

_app.get('/hello', ( req, res ) => {
    res.status(200).json({
        "status": "ok",
        "message": "Hello World"
    });
});

_app.get('/hello/:username', ( req, res ) => {
    let username = req.params.username || 'anno';
    res.status(200).json({
        "status": "ok",
        "message": `Hello World, ${username}`
    });
});

export let api = functions.https.onRequest(_app);
