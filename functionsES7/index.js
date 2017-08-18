'use strict';

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

import Koa from 'koa';
import Router from 'koa-router';
import cookie from 'koa-cookie';
import cors from 'kcors';

const _app = new Koa();
const router = new Router();

// Middleware
_app.use(cookie());
_app.use(cors());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

router.get('/', async ( ctx, next ) => {
    // let req = ctx.request;
    // let res = ctx.response;

    ctx.status = 200;
    ctx.body = {
        'status': 'ok',
        'message': 'Hello World'
    };
});

_app
    .use(router.routes())
    .use(router.allowedMethods());

export let app = functions.https.onRequest(_app);
