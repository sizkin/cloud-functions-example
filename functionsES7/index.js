"use strict";

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import * as serviceAccount from '../test-cr-9bf8d-firebase-adminsdk-g5y30-859c9af407.json';

if (process.env.NODE_ENV === 'production') {
    admin.initializeApp(functions.config().firebase);
} else {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://test-cr-9bf8d.firebaseio.com"
    });
}

import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import users from './routes/Users';

const _app = express();

const authenticate = (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        res.status(403).send('Unauthorized');
        return;
    }
    const idToken = req.headers.authorization.split('Bearer ')[1];
    admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
        req.user = decodedIdToken;
        next();
    }).catch(error => {
        res.status(403).send('Unauthorized');
    });
};

// Middleware
_app.use(cors({origin: true}));
_app.use(cookieParser());
// _app.use(authenticate);

_app.get('/hello', (req, res) => {
    res.status(200).json({
        "status": "ok",
        "message": "Hello World"
    });
});

_app.get('/hello/:username', (req, res) => {
    let username = req.params.username || 'anno';
    res.status(200).json({
        "status": "ok",
        "message": `Hello World, ${username}`
    });
});

_app.get('/users/:userId', async (req, res) => {
    const Users = new users();
    let userId = req.params.userId || 'anno';
    let user = await Users.getUser(userId);
    res.status(200).json({
        "status": "ok",
        "message": user.val()
    });

});

export let api = functions.https.onRequest(_app);
