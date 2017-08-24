"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.api = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _Users = require('./models/Users');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

admin.initializeApp(functions.config().firebase);

var _app = (0, _express2.default)();

// Middleware
_app.enable('trust proxy');
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

_app.get('/db/connect', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var connectStatus;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _Users.Users)();

                    case 2:
                        connectStatus = _context.sent;

                        res.status(200).json({
                            "status": "ok",
                            "message": '' + connectStatus
                        });

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

var api = exports.api = functions.https.onRequest(_app);