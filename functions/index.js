'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.api = undefined;

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _firebaseAdmin = require('firebase-admin');

var admin = _interopRequireWildcard(_firebaseAdmin);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

admin.initializeApp(functions.config().firebase);

var _app = (0, _express2.default)();

// Middleware
_app.use((0, _cors2.default)({ origin: true }));
_app.use((0, _cookieParser2.default)());

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

_app.get('/hello', function (req, res) {
    res.status(200).json({
        "status": "ok",
        "message": "Hello World"
    });
});

_app.get('/hello/:username', function (req, res) {
    var username = req.params.username || 'anno';
    res.status(200).json({
        "status": "ok",
        "message": 'Hello World, ' + username
    });
});

var api = exports.api = functions.https.onRequest(_app);