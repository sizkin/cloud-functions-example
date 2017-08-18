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
    res.send(`Hello world`);
});

export let app = functions.https.onRequest(_app);
